
from word import *
from util import *


def score_term_from_words(words,boundaries,i,j):
    """score of using words from i to j as a term"""
    length = j - i
    main_word_count = 0
    prefix_word_count = 0
    second_word_count = 0
    suffix_word_count = 0
    wrong_position_count = 0
    for k in range(i,j):
        word = words[k]
        if is_main_word(word): main_word_count += 1
        elif is_second_word(word) and k == i + 1: second_word_count += 1
        elif is_prefix_word(word) and main_word_count == 0: prefix_word_count += 1
        elif is_prefix_word(word) and main_word_count > 0: wrong_position_count += 1
        elif is_suffix_word(word) and main_word_count == 0: wrong_position_count += 1
        elif is_suffix_word(word) and main_word_count > 0: suffix_word_count += 1
    result = 0
    if main_word_count == 1:
        result += 10
        result += prefix_word_count + second_word_count*4 + suffix_word_count
    else:
        result -= 100
    result -= wrong_position_count * 100
    return result


