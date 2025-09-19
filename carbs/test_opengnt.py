import unittest
from opengnt import *

class TestOpengnt(unittest.TestCase):


    def test_get_coords(self):
        self.assertEqual(get_coords(), "J2:1-2:2")
        sys.argv = ["", "J3:4-5:6"]
        self.assertEqual(get_coords(), "J3:4-5:6")

        
    def test_parse_coords(self):
        self.assertEqual(parse_coords("J2:1-2:2"), (43,"02:01.01","02:02.99"))
        self.assertEqual(parse_coords("J2:1"), (43,"02:01.01","02:01.99"))

        
    def test_parse_coord(self):
        self.assertEqual(parse_coord("2:3",1), "02:03.01")
        self.assertEqual(parse_coord("2:3",99), "02:03.99")
        self.assertEqual(parse_coord("2:3.12"), "02:03.12")


if __name__ == "__main__":
    unittest.main()
