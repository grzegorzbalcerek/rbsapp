import unittest
from term import *
from member import *
from opengnt import *
from data_for_tests import *


class TestSegment(unittest.TestCase):


    def test_score_member(self):
        data = J_3_1
        term_boundaries = [1,0,1,1,0,0,1,1,1,1,1,0,1]
        self.assertEqual(score_member(data,term_boundaries,0,12),-9999)
        self.assertEqual(score_member(data,term_boundaries,0,2),551)
        self.assertEqual(score_member(data,term_boundaries,0,3),552)
        self.assertEqual(score_member(data,term_boundaries,0,6),553)


if __name__ == "__main__":
    unittest.main()
