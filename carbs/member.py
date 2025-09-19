
from term import *
from util import *


def score_member(data,boundaries,i,j):
    filtered_boundaries = [b for b in boundaries[i:j] if b >= 1]
    length = len(filtered_boundaries)
    if length > 6:
        return -9999
    verb_count = 0
    for k in range(i,j):
        word = data[k]
        if is_verb(word): verb_count += 1
    result = length
    if verb_count == 1:
        result += 500
    else:
        result -= 500
    if j-i >= 2:
        word2 = data[i+1]
        if is_second_word(word2):
            result += 50
    return result


