import unittest
from word import *
from term import *
from text import *
from data_for_tests import *


class TestText(unittest.TestCase):


    def test_word_to_text(self):
        self.assertEqual(word_to_text(J_4_51[0]), 'ἤδη')


    def test_data_to_text(self):
        data = J_2_8
        self.assertEqual(data_to_text(J_2_8[0:1], [0,0]), 'Καὶ ')
        self.assertEqual(data_to_text(J_2_8[0:1], [1,1]), 'Καὶ     ')
        self.assertEqual(data_to_text(J_2_8[0:2], [1,0,1]), 'Καὶ λέγει     ')
        self.assertEqual(data_to_text(J_2_8[0:2], [2,1,2]), 'Καὶ     λέγει\n')


if __name__ == "__main__":
    unittest.main()
