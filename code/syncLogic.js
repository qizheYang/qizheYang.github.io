/**
 * Pure functions for recording sync state transformations.
 * Extracted for testability — no React dependencies.
 */

const WIND_MAP = { east: 0, south: 1, west: 2, north: 3 };

/**
 * Build the next overlay state from a recording game update.
 *
 * @param {object}  prevState   Current overlay state (from useGameState)
 * @param {object}  game        Game object from the recording server
 * @param {string}  matchMode   "seat" | "name"
 * @param {boolean} animate     Whether this is a new-hand animation (clears per-hand fields)
 * @returns {object} The next overlay state (complete, ready to replace prev)
 */
export function buildSyncState(prevState, game, matchMode, animate) {
  const windIdx = WIND_MAP[game.currentRound.wind] ?? 0;

  const next = {
    ...prevState,
    round: { wind: windIdx, number: game.currentRound.number },
    honba: game.honbaCount,
    riichiSticks: game.riichiSticks,
  };

  const players = prevState.players.map((p) => ({ ...p }));

  game.players.forEach((rp, ri) => {
    let targetIdx;
    if (matchMode === "seat") {
      targetIdx = ri;
    } else {
      targetIdx = prevState.players.findIndex((sp) => sp.name === rp.name);
    }

    if (targetIdx >= 0 && targetIdx < 4) {
      const seatWind = (ri - game.currentDealer + 4) % 4;
      players[targetIdx] = {
        ...players[targetIdx],
        score: rp.points,
        seatWind,
      };

      if (animate) {
        players[targetIdx].riichi = false;
        players[targetIdx].tenpai = [];
        players[targetIdx].calls = [];
      }
    }
  });

  next.players = players;
  return next;
}

export { WIND_MAP };
