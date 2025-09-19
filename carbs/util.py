from pprint import pprint


def make_arr(n, content=0):
    """
    make an array of length n with content
    """
    return [content] * n


def make_matrix(n, m=None, content=0):
    """
    make a matrix n x n with content
    """
    if not m: m = n
    return [make_arr(m, content) for col in range(n)]


def init_boundaries(data):
    n = len(data)
    return [0 for n in range(n+1)]


def boundaries_to_indices(boundaries, level):
    indices = []
    index = 0
    for b in boundaries:
        if b >= level:
            indices.append(index)
        index += 1
    return indices


# levels:
# 0 - word
# 1 - term
# 2 - member
# 3 - segment
# 4 - piece


def calculate_scores(data, boundaries, level, score_function):
    scores = {}
    indices = boundaries_to_indices(boundaries, level)
    for i in indices[:-1]:
        for j in [j for j in indices if j > i]:
            scores[(i,j)] = score_function(data, boundaries, i, j)
    return scores


def calculate_dp_suffixes(scores, boundaries, level, n = None):
    """
    calculate dp scores and power pointers for suffixes of indiecs
    """
    if not n: n = len(boundaries)-1
    #print(f"{n=}")
    dp = {}
    pp = {}
    indices = [j for j in boundaries_to_indices(boundaries, level) if j <= n]
    reversedIndices = reversed(indices)
    #print(f"{indices=}")
    #print(f"{reversedIndices=}")

    for i in reversedIndices:
        best_score = None
        best_index = None
        for j in [j for j in indices if j > i]:
            #print(f"d4: {i=} {j=}")
            suffix_score = dp.get(j, 0)
            score_j = scores[(i,j)] + suffix_score
            if not best_score or score_j > best_score:
                #print(f"best1")
                best_score = score_j
                best_index = j
        if best_index != None:
            #print(f"best2")
            dp[i] = best_score
            pp[i] = best_index

    return (dp, pp)


def pp_update_boundaries(pp, in_boundaries, level):
    boundaries = in_boundaries[:]
    boundaries[0] = level
    i = 0
    while i in pp:
        j = pp[i]
        boundaries[j] = level
        i = j
    return boundaries


def pp_solutions(data, pp, mksolution):
    solutions = []
    i = 0
    while i in pp:
        j = pp[i]
        solutions.append(mksolution(data,i,j))
        i = j
    return solutions


def ppm_solutions(data, ppm, mksolution, frm = 0, to = None):
    if not to: to = len(data)
    solutions = []
    i = frm
    while (i,to) in ppm:
        j = ppm[(i,to)]
        solutions.append(mksolution(data,i,j))
        i = j
    return solutions


def ppm_update_boundaries(ppm, in_boundaries, level, frm = 0, to = None):
    if not to: to = len(data)
    boundaries = in_boundaries[:]
    boundaries[frm] = level
    i = frm
    while i in pp:
        j = pp[i]
        boundaries[j] = level
        i = j
    return boundaries

def calculate_dp_ranges(scores, boundaries, level):
    """
    returns (scorem,ppm) where
    scorem[(i,j)] is the score for the range [i:j]
    ppm are power pointers, that the function ppm_to_pp converts to pp
    """
    scoresm = {}
    ppm = {}
    indices = boundaries_to_indices(boundaries, level)
    for k in indices[1:]:
        (dp, pp) = calculate_dp_suffixes(scores, boundaries, level, k)
        for key,value in dp.items():
            scoresm[(key,k)] = value
        for key,value in pp.items():
            ppm[(key,k)] = value
    return (scoresm, ppm)


def add_matrices(a, b):
    a_height = len(a)
    a_width = len(a[0]) if a_height > 0 else 0
    b_height = len(b)
    b_width = len(b[0]) if b_height > 0 else 0
    if a_height != b_height: raise Error(f"Matrix a has length {a_height} but matrix b has length {b_height}")
    if a_width != b_width: raise Error(f"Matrix a has  {a_width} but matrix b has length {b_width}")
    result = make_matrix(a_height, a_width)
    for x in range(a_height):
        for y in range(a_width):
            a_value = a[x][y] if a[x][y] else 0
            b_value = b[x][y] if b[x][y] else 0
            result[x][y] = a_value + b_value
    return result


def subranges_of_range(boundaries,level,i,j,max_len=99999999):
    """
    generate all possible ways of spliting the range [i,j] into subranges but taking into account boundaries and level
    """
    subsets = [[]]
    indices = [k for k in boundaries_to_indices(boundaries, level) if i < k < j] 
    for k in indices:
        subsets = subsets + [s + [k] for s in subsets if len(s) <= max_len - 2]
    subsets = [[i]+s+[j] for s in subsets]
    subranges = [list(zip(s, s[1:])) for s in subsets]
    return subranges


def pairs_of_elements(lst):
    """
    return all pairs of elements of the given list

    >>> pairs_of_elements([1,2,3])
    [(1, 2), (1, 3), (2, 3)]
    """
    if len(lst) <= 1:
        return []
    else:
        return [ (lst[0], elem) for elem in lst[1:] ] + pairs_of_elements(lst[1:])


