"""Shanten calculation and best discard advisor for MCR and Riichi modes."""

from dataclasses import dataclass, field
from tiles import ALL_TILES, tiles_to_34_array, tiles_to_gb, count_remaining

@dataclass
class DiscardOption:
    """Result of discarding one tile from a hand with extra tiles."""
    discard: str
    resulting_shanten: int
    acceptance: list          # tiles that improve the resulting hand
    acceptance_count: int     # total remaining copies of acceptance tiles
    mcr_valid_wins: int = 0   # acceptance tiles with >=8 fan
    mcr_best_fan: int = 0     # highest fan among acceptance tiles


def _shanten_mcr_raw(hand_gb, gb_pack):
    from MahjongGB import MahjongShanten
    return MahjongShanten(pack=gb_pack, hand=tuple(hand_gb))


def _shanten_riichi(tiles_34, has_melds=False):
    from mahjong.shanten import Shanten
    s = Shanten()
    return s.calculate_shanten(tiles_34,
                               use_chiitoitsu=not has_melds,
                               use_kokushi=not has_melds)


def _find_best_discards(hand, melds, mode):
    """For a hand with extra tiles, find best tile to discard.

    MCR mode: when discard leads to tenpai, also computes win validity
    and adjusts ranking to prefer discards with valid (>=8 fan) wins.
    """
    seen = set()
    options = []
    gb_pack = tuple(m['gb_pack'] for m in melds)

    for i, tile in enumerate(hand):
        if tile in seen: continue
        seen.add(tile)
        test_hand = hand[:i] + hand[i+1:]

        if mode == "mcr":
            test_gb = tiles_to_gb(test_hand)
            shanten = _shanten_mcr_raw(test_gb, gb_pack)
            acceptance, acc_count = _find_acceptance_mcr(test_hand, melds, shanten)
            valid_wins, best_fan = 0, 0
            if shanten == 0:
                for a in acceptance:
                    if a.mcr_win and a.mcr_win.is_valid_win: valid_wins += 1
                    if a.mcr_win: best_fan = max(best_fan, a.mcr_win.best_fan)
            options.append(DiscardOption(
                discard=tile, resulting_shanten=shanten,
                acceptance=acceptance, acceptance_count=acc_count,
                mcr_valid_wins=valid_wins, mcr_best_fan=best_fan))
        else:
            test_34 = tiles_to_34_array(test_hand)
            shanten = _shanten_riichi(test_34, has_melds=bool(melds))
            acceptance, acc_count = _find_acceptance_riichi(test_hand, melds, shanten)
            options.append(DiscardOption(
                discard=tile, resulting_shanten=shanten,
                acceptance=acceptance, acceptance_count=acc_count))

    if mode == "mcr":
        # MCR ranking: shanten ASC, valid_count DESC, best_fan DESC, acceptance DESC
        options.sort(key=lambda o: (
            o.resulting_shanten, -o.mcr_valid_wins,
            -o.mcr_best_fan, -o.acceptance_count))
    else:
        options.sort(key=lambda o: (o.resulting_shanten, -o.acceptance_count))
    return options
