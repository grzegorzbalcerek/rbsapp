import unittest
from segment import *
from data_for_tests import *


class TestSegment(unittest.TestCase):

    def test_score_segment(self):
        data = J_4_51
        term_boundaries = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1]
        self.assertEqual(score_segment(data,term_boundaries,0,15), 480.0)


if __name__ == "__main__":
    unittest.main()
