import type { WSContext, WSMessageReceive } from 'hono/ws';
import type { ClientEvent, ServerEvent, Game, FinalScore, TeamScore } from '@mahjong/shared';
import { roomManager } from './room-manager.js';

const connectionCtx = new WeakMap<WSContext, { roomCode: string; playerId: string }>();

export function handleWSOpen(ws: WSContext, roomCode: string, playerId: string): void {
  connectionCtx.set(ws, { roomCode, playerId });
  const room = roomManager.connectPlayer(roomCode, playerId, ws);
  if (!room) { ws.close(4001, 'Invalid room or player'); return; }

  ws.send(JSON.stringify({ type: 'room_state', room } as ServerEvent));
  const player = room.players.find(p => p.id === playerId);
  if (player) roomManager.broadcast(roomCode, { type: 'player_joined', player }, playerId);
}

export function handleWSMessage(ws: WSContext, data: WSMessageReceive): void {
  const ctx = connectionCtx.get(ws);
  if (!ctx) return;

  let event: ClientEvent;
  try { event = JSON.parse(typeof data === 'string' ? data : data.toString()); }
  catch { return; }

  const { roomCode } = ctx;

  switch (event.type) {
    case 'ready_toggle': {
      const result = roomManager.toggleReady(roomCode, ctx.playerId);
      if ('error' in result) return;
      roomManager.broadcast(roomCode, {
        type: 'player_ready', playerId: ctx.playerId, ready: result.ready,
      });
      // Auto-start when all 4 players are ready
      if (result.allReady) {
        const room = roomManager.getRoom(roomCode);
        if (room) {
          const game = roomManager.startGame(roomCode, room.players.map(p => p.id));
          if (!('error' in game)) roomManager.broadcast(roomCode, { type: 'game_started', game });
        }
      }
      break;
    }
    case 'record_hand': {
      const result = roomManager.recordHand(roomCode, event.result);
      if ('error' in result) return;
      const { hand, game } = result;
      if (game.status === 'completed') {
        const finalScores = roomManager.getGameFinalScores(roomCode);
        roomManager.broadcast(roomCode, { type: 'game_ended', game, finalScores: finalScores ?? [] });
      } else {
        roomManager.broadcast(roomCode, { type: 'hand_recorded', hand, game });
      }
      break;
    }
    case 'undo_last_hand': {
      const result = roomManager.undoHand(roomCode);
      if (!('error' in result)) roomManager.broadcast(roomCode, { type: 'hand_undone', game: result });
      break;
    }
    case 'end_game': {
      const result = roomManager.endGame(roomCode);
      if (!('error' in result)) {
        roomManager.broadcast(roomCode, {
          type: 'game_ended', game: result.game, finalScores: result.finalScores,
        });
      }
      break;
    }
    // ... swap_seats, edit_hand, record_penalty, leave_room handlers
  }
}

export function handleWSClose(ws: WSContext): void {
  const ctx = connectionCtx.get(ws);
  if (!ctx) return;
  roomManager.disconnectPlayer(ctx.roomCode, ctx.playerId);
  connectionCtx.delete(ws);
}
