/// Client-side Sichuan mahjong win detection and han counting.
class SichuanRules {
  SichuanRules._();

  /// Check if hand + melds form a winning hand.
  static bool isWinningHand(
    List<int> handTileIds, List<List<int>> meldTileIds, int missingSuit,
  ) {
    final allIds = <int>[...handTileIds];
    for (final meld in meldTileIds) allIds.addAll(meld);
    if (allIds.any((id) => _suitOf(id) == missingSuit)) return false;

    final counts = <int, int>{};
    for (final id in handTileIds) {
      final kind = id ~/ 4;
      counts[kind] = (counts[kind] ?? 0) + 1;
    }
    return _canWin(counts);
  }

  /// Count han: base 1, +1 all-triplets (对对和), +1 single suit (清一色), cap 5.
  static int countHan(
    List<int> handTileIds, List<List<int>> meldTileIds, int missingSuit,
  ) {
    int han = 1;
    final allIds = <int>[...handTileIds];
    for (final meld in meldTileIds) allIds.addAll(meld);

    final handCounts = <int, int>{};
    for (final id in handTileIds) {
      final kind = id ~/ 4;
      handCounts[kind] = (handCounts[kind] ?? 0) + 1;
    }
    final handAllTriplets = handCounts.values.every((c) => c == 2 || c == 3);
    final meldsAllTriplets = meldTileIds.every((ids) {
      if (ids.isEmpty) return true;
      final kind = ids.first ~/ 4;
      return ids.every((id) => id ~/ 4 == kind);
    });
    if (handAllTriplets && meldsAllTriplets) han++;
    if (allIds.map(_suitOf).toSet().length == 1) han++;
    return han > 5 ? 5 : han;
  }

  static int _suitOf(int tileId) {
    final kind = tileId ~/ 4;
    if (kind < 9) return 0;
    if (kind < 18) return 1;
    return 2;
  }

  static bool _canWin(Map<int, int> counts) {
    for (final kind in counts.keys.toList()) {
      if (counts[kind]! >= 2) {
        counts[kind] = counts[kind]! - 2;
        if (counts[kind] == 0) counts.remove(kind);
        if (_removeGroups(counts)) { counts[kind] = (counts[kind] ?? 0) + 2; return true; }
        counts[kind] = (counts[kind] ?? 0) + 2;
      }
    }
    return false;
  }

  /// Recursive backtracking: remove triplets and sequences until empty.
  static bool _removeGroups(Map<int, int> counts) {
    if (counts.isEmpty) return true;
    final kind = counts.keys.reduce((a, b) => a < b ? a : b);

    if (counts[kind]! >= 3) {
      counts[kind] = counts[kind]! - 3;
      if (counts[kind] == 0) counts.remove(kind);
      if (_removeGroups(counts)) { counts[kind] = (counts[kind] ?? 0) + 3; return true; }
      counts[kind] = (counts[kind] ?? 0) + 3;
    }

    if (_suitOf(kind * 4) == _suitOf((kind + 1) * 4) &&
        _suitOf(kind * 4) == _suitOf((kind + 2) * 4) &&
        (counts[kind + 1] ?? 0) >= 1 && (counts[kind + 2] ?? 0) >= 1) {
      for (var k = kind; k <= kind + 2; k++) {
        counts[k] = counts[k]! - 1;
        if (counts[k] == 0) counts.remove(k);
      }
      if (_removeGroups(counts)) {
        for (var k = kind; k <= kind + 2; k++) counts[k] = (counts[k] ?? 0) + 1;
        return true;
      }
      for (var k = kind; k <= kind + 2; k++) counts[k] = (counts[k] ?? 0) + 1;
    }
    return false;
  }
}
