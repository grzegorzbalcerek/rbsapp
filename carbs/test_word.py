import unittest
from word import *
from term import *
from data_for_tests import *


class TestWord(unittest.TestCase):


    def test_is_main_word(self):
        self.assertEqual(is_main_word(J_4_51[1]), False)
        self.assertEqual(is_main_word(J_4_51[3]), True)


    def test_is_second_word(self):
        self.assertEqual(is_second_word(J_4_51[0]), False)
        self.assertEqual(is_second_word(J_4_51[1]), True)
        self.assertEqual(is_second_word(J_4_51[2]), False)


    def test_is_prefix_word(self):
        self.assertEqual(is_prefix_word(J_4_51[4]), True)
        self.assertEqual(is_prefix_word(J_4_51[5]), False)


    def test_is_verb(self):
        self.assertEqual(is_verb(J_4_51[9]), True)
        self.assertEqual(is_verb(J_4_51[0]), False)

    
    def test_word_pair_score(self):
        self.assertEqual(word_pair_score(J_4_51[1], J_4_51[2]), 0)
        self.assertEqual(word_pair_score(J_4_51[2], J_4_51[6]), 14)
        self.assertEqual(word_pair_score(J_4_51[4], J_4_51[11]), 10)

        
    def test_words_pair_score(self):
        self.assertEqual(words_pair_score(J_4_51, 0,1,2,3), 0.0)
        self.assertEqual(words_pair_score(J_4_51, 4,5,11,12), 10.0)

        
if __name__ == "__main__":
    unittest.main()
