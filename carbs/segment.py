
from util import *
from word import *


def score_segment(data,term_boundaries,i,j):
    """
    list_of_potential_splits = generate all possible ways of spliting the range [i,j] into subranges
    (one of them will be the solution, now we need to select the best one; a split is a list of ranges)
    """
    list_of_potential_splits = subranges_of_range(term_boundaries,1,i,j,3)
    best_score = -99999999
    best_split = None
    for potential_split in list_of_potential_splits:
        score = score_segment_split(data, potential_split)
        if score > best_score:
            best_score = score
            best_split = potential_split
    return best_score


def score_segment_split(data, split):
    """
    if split is empty, return -999.0 (impossible split)
    is split is of length one, return 0.5 (default score for a segment with one member)
    else:
    range_pairs = generate a list of pairs of ranges from the split
    dla każdej pary list z P oblicz score dla tej pary szukając wyrazów początkowych, końcowych, itp.
    Dodaj wszystkie score z wszystkich par i zwróć jako rezultat score dla B.
    Dodaj sumę score dla wszystkich par z poziomu poprzedniego.
    Oblicz maksimum z wszystkich rezultatów dla każdego elementu w B.
    """
    if not split:
        return -999.0
    elif len(split) == 1:
        return 7.5
    score = 0.0
    for ((left_i,left_j), (right_i, right_j)) in pairs_of_elements(split):
        score += words_pair_score(data, left_i, left_j, right_i, right_j)
    adjusted_score = score / pow(split[-1][1] - split[0][0], 3)
    return score
