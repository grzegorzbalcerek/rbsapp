import re


MAIN_WORD_RE = re.compile("V-|N-|A-|ADV|P-")
PREFIX_WORD_RE = re.compile("CONJ|PREP|T-")
SUFFIX_WORDS = ["G3568"]
SECOND_WORDS = ["G1161"]
VERB_RE = re.compile("V-")


def is_verb(w):
    return not not VERB_RE.match(w["rmac"])


def is_main_word(w):
    return not not MAIN_WORD_RE.match(w["rmac"]) and not is_prefix_word(w) and not is_second_word(w) and not is_suffix_word(w)


def is_second_word(w):
    return not not w["sn"] in SECOND_WORDS


def is_prefix_word(w):
    return not not PREFIX_WORD_RE.match(w["rmac"])


def is_suffix_word(w):
    return not not w["sn"] in SUFFIX_WORDS


def word_pair_score(w1, w2):
    """
    calculate the matching score for two words
    """
    score = 0.0
    if w1["sn"] == w2["sn"]: score += 10.0
    if w1["rmac"] == w2["rmac"]: score += 4.0
    return score


def words_pair_score(data, left_i, left_j, right_i, right_j):
    combined_score = 0.0
    for left in range(left_i, left_j):
        for right in range(right_i, right_j):
            combined_score += word_pair_score(data[left], data[right])
    return combined_score / (left_j - left_i) * (right_j - right_i)

