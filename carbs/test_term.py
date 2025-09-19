import unittest
from term import *
from opengnt import *
from data_for_tests import *


class TestTerm(unittest.TestCase):


    def test_score_term_from_words(self):
        self.assertEqual(score_term_from_words(J_4_51,None,0,1), 10)
        self.assertEqual(score_term_from_words(J_4_51,None,1,2), -100)
        self.assertEqual(score_term_from_words(J_4_51,None,0,2), 14)
        self.assertEqual(score_term_from_words(J_4_51,None,0,3), -100)
        self.assertEqual(score_term_from_words(J_4_51,None,4,5), -100)


    def test_term_j_4_51(self):
        data = J_4_51
        boundaries = init_boundaries(data)
        print(f"{boundaries=}")
        scores = calculate_scores(data, boundaries, 0, score_term_from_words)
        print(scores)
        (_,pp) = calculate_dp_suffixes(scores, boundaries, 0)
        boundaries1 = pp_update_boundaries(pp, boundaries, 1)
        self.assertEqual(boundaries1, [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1])


if __name__ == "__main__":
    unittest.main()
