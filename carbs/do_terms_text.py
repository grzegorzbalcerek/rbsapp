
if __name__ == "__main__":
    import opengnt
    from util import *
    from term import *
    from word import *
    from text import *
    data = opengnt.load()
    word_boundaries = init_boundaries(data)
    term_scores = calculate_scores(data, word_boundaries, 0, score_term_from_words)
    (term_dp,term_pp) = calculate_dp_suffixes(term_scores, word_boundaries, 0)
    term_boundaries = pp_update_boundaries(term_pp, word_boundaries, 1)
    text = data_to_text(data, term_boundaries)
    print(term_boundaries)
    print(text)
