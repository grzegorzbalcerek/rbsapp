
if __name__ == "__main__":
    import opengnt
    from pprint import pprint
    from util import *
    from term import *
    from word import *
    from member import *
    from segment import *
    from text import *

    data = opengnt.load()

    word_boundaries = init_boundaries(data)
    term_scores = calculate_scores(data, word_boundaries, 0, score_term_from_words)
    (term_dp,term_pp) = calculate_dp_suffixes(term_scores, word_boundaries, 0)
    term_boundaries = pp_update_boundaries(term_pp, word_boundaries, 1)

    member_scores = calculate_scores(data, term_boundaries, 1, score_member)
    segment_scores = calculate_scores(data, term_boundaries, 1, score_segment)
    pprint(segment_scores)
    (segment_dp,segment_pp) = calculate_dp_suffixes(segment_scores, term_boundaries, 1)
    segment_boundaries = pp_update_boundaries(segment_pp, term_boundaries, 3)

    text = data_to_text(data, segment_boundaries)
    print(segment_boundaries)
    print(text)
