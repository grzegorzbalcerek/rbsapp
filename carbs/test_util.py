import unittest
from util import *
from data_for_tests import *
from pprint import *

p = PrettyPrinter(width=120)

def mkgoodness(page_width):
    def goodness(words,boundaries,i,j):
        width = len(" ".join(words[i:j]))
        if width > page_width:
            return -99999999
        else:
            return -pow(page_width - width, 3)
    return goodness

def old_mkgoodness(page_width):
    def goodness(words,i,j):
        width = len(" ".join(words[i:j]))
        if width > page_width:
            return -99999999
        else:
            return -pow(page_width - width, 3)
    return goodness

def words2line(page_width, words):
    holes = len(words) - 1
    if holes == 0:
        return " ".join(words)
    else:
        spaces = page_width - len("".join(words))
        long_separator_count = spaces % holes
        long_separator = " " * (spaces // holes + 1)
        short_separator = " " * (spaces // holes)
        first_part = long_separator.join(words[0:long_separator_count])
        second_part = short_separator.join(words[long_separator_count:])
        if long_separator_count == 0:
            return second_part
        else:
            return first_part + long_separator + second_part

def mkjustify(page_width):
    return lambda arr,i,j: words2line(page_width,arr[i:j])


class TestUtil(unittest.TestCase):


    def test_make_arr(self):
        self.assertEqual(make_arr(2), [0, 0])


    def test_make_matrix(self):
        self.assertEqual(make_matrix(2), [[0, 0], [0, 0]])
        self.assertEqual(make_matrix(2,3), [[0, 0, 0], [0, 0, 0]])


    def test_init_boundaries(self):
        self.assertEqual(init_boundaries([]), [0])
        self.assertEqual(init_boundaries([4]), [0, 0])
        self.assertEqual(init_boundaries([6, 7]), [0, 0, 0])


    def test_boundaries_to_indices(self):
        self.assertEqual(boundaries_to_indices([], 1), [])
        self.assertEqual(boundaries_to_indices([0, 0], 0), [0, 1])
        self.assertEqual(boundaries_to_indices([1,0,0,1], 1), [0, 3])
        self.assertEqual(boundaries_to_indices([2,0,0,1,0,1,0,0,0,2], 1), [0, 3, 5, 9])


    def test_calculate_scores(self):
        data = OLA4
        boundaries = init_boundaries(data)
        self.assertEqual(calculate_scores(data, boundaries, 0, mkgoodness(8)),
                         {(0, 1): -125, (0, 2): -8, (0, 3): -99999999, (0, 4): -99999999,
                          (1, 2): -216, (1, 3): -1, (1, 4): -99999999,
                          (2, 3): -64,  (2, 4): -99999999,
                          (3, 4): 0})
        self.assertEqual(calculate_scores(data, boundaries, 0, mkgoodness(11)),
                         {(0, 1): -512, (0, 2): -125, (0, 3): 0, (0, 4): -99999999,
                          (1, 2): -729, (1, 3): -64,  (1, 4): -99999999,
                          (2, 3): -343, (2, 4): -99999999,
                          (3, 4): -27})
        self.assertEqual(calculate_scores(data, boundaries, 0, mkgoodness(12)),
                         {(0, 1): -729,  (0, 2): -216, (0, 3): -1, (0, 4): -99999999,
                          (1, 2): -1000, (1, 3): -125, (1, 4): -99999999,
                          (2, 3): -512,  (2, 4): -99999999,
                          (3, 4): -64})

    def test_mkjustify(self):
        pp = {0: 1, 1: 3, 2: 3, 3: 4}
        self.assertEqual(mkjustify(6)(ALA, 1, 3), "ma psa")
                         
    def test_ala6(self):
        data = ALA
        boundaries = init_boundaries(data)
        self.assertEqual(boundaries, [0, 0, 0, 0, 0])
        scores = calculate_scores(data, boundaries, 0, mkgoodness(6))
        self.assertEqual(scores,
                         {(0, 1): -27, (0, 2): 0, (0, 3): -99999999, (0, 4): -99999999,
                          (1, 2): -64, (1, 3): 0, (1, 4): -99999999,
                          (2, 3): -27, (2, 4): -99999999,
                          (3, 4): -27})
        (dp,pp) = calculate_dp_suffixes(scores, boundaries, 0)
        self.assertEqual(dp, {0: -54, 1: -27, 2: -54, 3: -27})
        self.assertEqual(pp, {0: 1, 1: 3, 2: 3, 3: 4})
        new_boundaries = pp_update_boundaries(pp, boundaries, 1)
        self.assertEqual(new_boundaries, [1, 1, 0, 1, 1])
        solutions = pp_solutions(data, pp, mkjustify(6))
        self.assertEqual(solutions, ['Ala', 'ma psa', 'Asa'])


    def test_ala7(self):
        data = ALA
        boundaries = init_boundaries(data)
        scores = calculate_scores(data, boundaries, 0, mkgoodness(7))
        self.assertEqual(scores,
                         {(0, 1): -64,  (0, 2): -1, (0, 3): -99999999, (0, 4): -99999999,
                          (1, 2): -125, (1, 3): -1, (1, 4): -99999999,
                          (2, 3): -64,  (2, 4): 0,
                          (3, 4): -64})
        (dp,pp) = calculate_dp_suffixes(scores, boundaries, 0)
        self.assertEqual(dp, {0: -1, 1: -65, 2: 0, 3: -64})
        self.assertEqual(pp, {0: 2, 1: 3, 2: 4, 3: 4})
        new_boundaries = pp_update_boundaries(pp, boundaries, 1)
        self.assertEqual(new_boundaries, [1, 0, 1, 0, 1])
        solutions = pp_solutions(data, pp, mkjustify(7))
        self.assertEqual(solutions, ['Ala  ma', 'psa Asa'])


    def test_numbers(self):
        data = NUMBERS
        boundaries = init_boundaries(data)
        scores = calculate_scores(data, boundaries, 0, mkgoodness(18))
        self.assertEqual(scores,
                         {(0, 1): -3375, (0, 2): -1331, (0, 3): -125, (0, 4): 0,         (0, 5): -99999999, (0, 6): -99999999, (0, 7): -99999999, (0, 8): -99999999, (0, 9): -99999999, (0, 10): -99999999,
                          (1, 2): -3375, (1, 3): -729,  (1, 4): -64,  (1, 5): -99999999, (1, 6): -99999999, (1, 7): -99999999, (1, 8): -99999999, (1, 9): -99999999, (1, 10): -99999999,
                          (2, 3): -2197, (2, 4): -512,  (2, 5): -27,  (2, 6): -99999999, (2, 7): -99999999, (2, 8): -99999999, (2, 9): -99999999, (2, 10): -99999999,
                          (3, 4): -2744, (3, 5): -729,  (3, 6): -125, (3, 7): -99999999, (3, 8): -99999999, (3, 9): -99999999, (3, 10): -99999999,
                          (4, 5): -2744, (4, 6): -1000, (4, 7): -64,  (4, 8): -99999999, (4, 9): -99999999, (4, 10): -99999999,
                          (5, 6): -3375, (5, 7): -729,  (5, 8): -27,  (5, 9): -99999999, (5, 10): -99999999,
                          (6, 7): -2197, (6, 8): -343,  (6, 9): -8,   (6, 10):-99999999,
                          (7, 8): -2197, (7, 9): -512,  (7, 10): -64,
                          (8, 9): -2744, (8, 10): -1000,
                          (9, 10): -3375})
        (dp,pp) = calculate_dp_suffixes(scores, boundaries, 0)
        solutions = pp_solutions(data, pp, mkjustify(18))
        self.assertEqual(solutions, ['one two three four', 'five   six   seven', 'eight   nine   ten'])

        (dp,pp) = calculate_dp_suffixes(scores, boundaries[:-1], 0)
        solutions = pp_solutions(data, pp, mkjustify(18))
        self.assertEqual(solutions, ['one    two   three', 'four    five   six', 'seven  eight  nine'])

        (dp,pp) = calculate_dp_suffixes(scores, boundaries, 0, len(boundaries)-2)
        solutions = pp_solutions(data, pp, mkjustify(18))
        self.assertEqual(solutions, ['one    two   three', 'four    five   six', 'seven  eight  nine'])

        (scoresm,ppm) = calculate_dp_ranges(scores, boundaries, 0)
        self.assertEqual(scoresm,
                         {(0, 1): -3375,(0, 2): -1331,(0, 3): -125,(0, 4): 0,(0, 5): -854,(0, 6): -250,(0, 7): -64,(0, 8): -593,(0, 9): -258,(0, 10): -128,
                          (1, 2): -3375,(1, 3): -729,(1, 4): -64,(1, 5): -1458,(1, 6): -854,(1, 7): -128,(1, 8): -1197,(1, 9): -640,(1, 10): -192,
                          (2, 3): -2197,(2, 4): -512,(2, 5): -27,(2, 6): -1512,(2, 7): -576,(2, 8): -54,(2, 9): -1088,(2, 10): -640,
                          (3, 4): -2744,(3, 5): -729,(3, 6): -125,(3, 7): -1458,(3, 8): -468,(3, 9): -133,(3, 10): -1468,
                          (4, 5): -2744,(4, 6): -1000,(4, 7): -64,(4, 8): -1343,(4, 9): -576,(4, 10): -128,
                          (5, 6): -3375,(5, 7): -729,(5, 8): -27, (5, 9): -1241,(5, 10): -793,
                          (6, 7): -2197,(6, 8): -343,(6, 9): -8, (6, 10): -1343,
                          (7, 8): -2197,(7, 9): -512,(7, 10): -64,
                          (8, 9): -2744,(8, 10): -1000,
                          (9, 10): -3375})
        self.assertEqual(ppm,
                         {(0, 1): 1, (0, 2): 2, (0, 3): 3, (0, 4): 4, (0, 5): 3, (0, 6): 3, (0, 7): 4, (0, 8): 3, (0, 9): 3, (0, 10): 4,
                          (1, 2): 2, (1, 3): 3, (1, 4): 4, (1, 5): 3, (1, 6): 3, (1, 7): 4, (1, 8): 3, (1, 9): 4, (1, 10): 4,
                          (2, 3): 3, (2, 4): 4, (2, 5): 5, (2, 6): 4, (2, 7): 4, (2, 8): 5, (2, 9): 4, (2, 10): 4,
                          (3, 4): 4, (3, 5): 5, (3, 6): 6, (3, 7): 5, (3, 8): 6, (3, 9): 6, (3, 10): 6,
                          (4, 5): 5, (4, 6): 6, (4, 7): 7, (4, 8): 6, (4, 9): 7, (4, 10): 7,
                          (5, 6): 6, (5, 7): 7, (5, 8): 8, (5, 9): 7, (5, 10): 7,
                          (6, 7): 7, (6, 8): 8, (6, 9): 9, (6, 10): 8,
                          (7, 8): 8, (7, 9): 9, (7, 10): 10,
                          (8, 9): 9, (8, 10): 10,
                          (9, 10): 10})
        solutions = ppm_solutions(data, ppm, mkjustify(18), 0, len(data))
        self.assertEqual(solutions, ['one two three four', 'five   six   seven', 'eight   nine   ten'])
        solutions = ppm_solutions(data, ppm, mkjustify(18), 1, len(data) - 1)
        self.assertEqual(solutions, ['two   three   four', 'five   six   seven', 'eight         nine'])
        
        data = NUMBERS[1:-1]
        boundaries = init_boundaries(data)
        scores = calculate_scores(data, boundaries, 0, mkgoodness(18))
        (dp,pp) = calculate_dp_suffixes(scores, boundaries, 0)
        solutions = pp_solutions(data, pp, mkjustify(18))
        self.assertEqual(solutions, ['two   three   four', 'five   six   seven', 'eight         nine'])


    def test_calculate_dp_suffixes_jps(self):
        data = JPS
        boundaries = init_boundaries(data)
        scores = calculate_scores(data, boundaries, 0, mkgoodness(70))
        (dp,pp) = calculate_dp_suffixes(scores, boundaries, 0)
        solutions = pp_solutions(data, pp, mkjustify(70))
        self.assertEqual(solutions[0],  'Jakie  zatem  warunki  musi  spełniać  parametr  typu,  aby  mógł  być')
        self.assertEqual(solutions[1],  'określony  jako  kowariantny  albo kontrawariantny? Istnieją określone')
        self.assertEqual(solutions[2],  'pozycje  w  definicji  typu  ogólnego,  w  których  może być użyty typ')
        self.assertEqual(solutions[3],  'kowariantny  oraz  istnieją  pozycje,  w  których  może  być użyty typ')
        self.assertEqual(solutions[4],  'kontrawariantny.  Te  pierwsze  są określane jako pozycje kowariantne,')
        self.assertEqual(solutions[5],  'a  te  drugie  jako  pozycje  kontrawariantne.  Jeśli  typ kowariantny')
        self.assertEqual(solutions[6],  'lub  kontrawariantny  zostanie  użyty  w  pozycji,  w  której nie może')
        self.assertEqual(solutions[7],  'być  użyty,  to  kompilator  powiadomi  nas  o  tym komunikatem błędu.')
        self.assertEqual(solutions[8],  'Powyższe    przykłady    kompilacji   plików   ReaderWriter1.scala   i')
        self.assertEqual(solutions[9],  'ReaderWriter2.scala  pokazują  takie komunikaty. W pierwszym przypadku')
        self.assertEqual(solutions[10], 'kompilator  protestuje,  gdyż  nastąpiła  próba  użycia  kowariantnego')
        self.assertEqual(solutions[11], 'typu  T  w  pozycji  kontrawariantnej,  natomiast w drugim dlatego, że')
        self.assertEqual(solutions[12], 'nastąpiła próba użycia kontrawariantnego typu T w pozycji kowariantnej')
        
        
    def test_calculate_dp_suffixes_jps2(self):
        data = JPS[2:-2]
        boundaries = init_boundaries(data)
        scores = calculate_scores(data, boundaries, 0, mkgoodness(70))
        (dp,pp) = calculate_dp_suffixes(scores, boundaries, 0)
        solutions = pp_solutions(data, pp, mkjustify(70))
        self.assertEqual(solutions[0],  'warunki   musi   spełniać   parametr  typu,  aby  mógł  być  określony')
        self.assertEqual(solutions[1],  'jako    kowariantny    albo    kontrawariantny?   Istnieją   określone')
        self.assertEqual(solutions[2],  'pozycje  w  definicji  typu  ogólnego,  w  których  może być użyty typ')
        self.assertEqual(solutions[3],  'kowariantny  oraz  istnieją  pozycje,  w  których  może  być użyty typ')
        self.assertEqual(solutions[4],  'kontrawariantny.  Te  pierwsze  są określane jako pozycje kowariantne,')
        self.assertEqual(solutions[5],  'a  te  drugie  jako  pozycje  kontrawariantne.  Jeśli  typ kowariantny')
        self.assertEqual(solutions[6],  'lub   kontrawariantny   zostanie   użyty   w  pozycji,  w  której  nie')
        self.assertEqual(solutions[7],  'może  być  użyty,  to  kompilator  powiadomi  nas  o  tym  komunikatem')
        self.assertEqual(solutions[8],  'błędu.   Powyższe   przykłady  kompilacji  plików  ReaderWriter1.scala')
        self.assertEqual(solutions[9],  'i   ReaderWriter2.scala   pokazują   takie   komunikaty.  W  pierwszym')
        self.assertEqual(solutions[10], 'przypadku   kompilator   protestuje,   gdyż   nastąpiła  próba  użycia')
        self.assertEqual(solutions[11], 'kowariantnego  typu  T  w pozycji kontrawariantnej, natomiast w drugim')
        self.assertEqual(solutions[12], 'dlatego,   że  nastąpiła  próba  użycia  kontrawariantnego  typu  T  w')

    def test_calculate_dp_ranges_jps(self):
        data = JPS
        boundaries = init_boundaries(data)
        scores = calculate_scores(data, boundaries, 0, mkgoodness(70))
        (scoresm,ppm) = calculate_dp_ranges(scores, boundaries, 0)

        solutions = ppm_solutions(data, ppm, mkjustify(70), 0, len(data))
        self.assertEqual(solutions[0],  'Jakie  zatem  warunki  musi  spełniać  parametr  typu,  aby  mógł  być')
        self.assertEqual(solutions[1],  'określony  jako  kowariantny  albo kontrawariantny? Istnieją określone')
        self.assertEqual(solutions[2],  'pozycje  w  definicji  typu  ogólnego,  w  których  może być użyty typ')
        self.assertEqual(solutions[3],  'kowariantny  oraz  istnieją  pozycje,  w  których  może  być użyty typ')
        self.assertEqual(solutions[4],  'kontrawariantny.  Te  pierwsze  są określane jako pozycje kowariantne,')
        self.assertEqual(solutions[5],  'a  te  drugie  jako  pozycje  kontrawariantne.  Jeśli  typ kowariantny')
        self.assertEqual(solutions[6],  'lub  kontrawariantny  zostanie  użyty  w  pozycji,  w  której nie może')
        self.assertEqual(solutions[7],  'być  użyty,  to  kompilator  powiadomi  nas  o  tym komunikatem błędu.')
        self.assertEqual(solutions[8],  'Powyższe    przykłady    kompilacji   plików   ReaderWriter1.scala   i')
        self.assertEqual(solutions[9],  'ReaderWriter2.scala  pokazują  takie komunikaty. W pierwszym przypadku')
        self.assertEqual(solutions[10], 'kompilator  protestuje,  gdyż  nastąpiła  próba  użycia  kowariantnego')
        self.assertEqual(solutions[11], 'typu  T  w  pozycji  kontrawariantnej,  natomiast w drugim dlatego, że')
        self.assertEqual(solutions[12], 'nastąpiła próba użycia kontrawariantnego typu T w pozycji kowariantnej')

        solutions = ppm_solutions(data, ppm, mkjustify(70), 2, len(data) - 2)
        self.assertEqual(solutions[0],  'warunki   musi   spełniać   parametr  typu,  aby  mógł  być  określony')
        self.assertEqual(solutions[1],  'jako    kowariantny    albo    kontrawariantny?   Istnieją   określone')
        self.assertEqual(solutions[2],  'pozycje  w  definicji  typu  ogólnego,  w  których  może być użyty typ')
        self.assertEqual(solutions[3],  'kowariantny  oraz  istnieją  pozycje,  w  których  może  być użyty typ')
        self.assertEqual(solutions[4],  'kontrawariantny.  Te  pierwsze  są określane jako pozycje kowariantne,')
        self.assertEqual(solutions[5],  'a  te  drugie  jako  pozycje  kontrawariantne.  Jeśli  typ kowariantny')
        self.assertEqual(solutions[6],  'lub   kontrawariantny   zostanie   użyty   w  pozycji,  w  której  nie')
        self.assertEqual(solutions[7],  'może  być  użyty,  to  kompilator  powiadomi  nas  o  tym  komunikatem')
        self.assertEqual(solutions[8],  'błędu.   Powyższe   przykłady  kompilacji  plików  ReaderWriter1.scala')
        self.assertEqual(solutions[9],  'i   ReaderWriter2.scala   pokazują   takie   komunikaty.  W  pierwszym')
        self.assertEqual(solutions[10], 'przypadku   kompilator   protestuje,   gdyż   nastąpiła  próba  użycia')
        self.assertEqual(solutions[11], 'kowariantnego  typu  T  w pozycji kontrawariantnej, natomiast w drugim')
        self.assertEqual(solutions[12], 'dlatego,   że  nastąpiła  próba  użycia  kontrawariantnego  typu  T  w')


    def test_add_matrices(self):
        self.assertEqual(add_matrices([], []), [])
        self.assertEqual(add_matrices([[1]], [[2]]), [[3]])
        self.assertEqual(add_matrices([[1]], [[None]]), [[1]])
        self.assertEqual(add_matrices([[1,3]], [[2,4]]), [[3,7]])
        self.assertEqual(add_matrices([[1,None],[2,4]], [[2,4],[7,None]]), [[3,4],[9,4]])


    def test_subranges_of_range(self):
        self.assertEqual(subranges_of_range([2,0,0,1,0,1,0,0,0,2], 1, 0, 9), [[(0, 9)], [(0, 3), (3, 9)], [(0, 5), (5, 9)], [(0, 3), (3, 5), (5, 9)]])
        self.assertEqual(subranges_of_range([2,0,2,0,0,1,0,1,0,0,0,2,0,2], 1, 2, 11), [[(2, 11)], [(2, 5), (5, 11)], [(2, 7), (7, 11)], [(2, 5), (5, 7), (7, 11)]])
        self.assertEqual(subranges_of_range([2,0,1,0,0,1,0,1,0,0,0,1,0,1,0,2], 1, 2, 13),
                         [[(2, 13)],
                          [(2, 5), (5, 13)],
                          [(2, 7), (7, 13)],
                          [(2, 5), (5, 7), (7, 13)],
                          [(2, 11), (11, 13)],
                          [(2, 5), (5, 11), (11, 13)],
                          [(2, 7), (7, 11), (11, 13)],
                          [(2, 5), (5, 7), (7, 11), (11, 13)]])
        self.assertEqual(subranges_of_range([2,0,1,0,0,1,0,1,0,0,0,1,0,1,0,2], 1, 2, 13, 3),
                         [[(2, 13)],
                          [(2, 5), (5, 13)],
                          [(2, 7), (7, 13)],
                          [(2, 5), (5, 7), (7, 13)],
                          [(2, 11), (11, 13)],
                          [(2, 5), (5, 11), (11, 13)],
                          [(2, 7), (7, 11), (11, 13)]])
        self.assertEqual(subranges_of_range([2,0,1,0,0,1,0,1,0,0,0,1,0,1,0,2], 1, 2, 13, 2),
                         [[(2, 13)],
                          [(2, 5), (5, 13)],
                          [(2, 7), (7, 13)],
                          [(2, 11), (11, 13)]])


    def test_pairs_of_elements(self):
        self.assertEqual(pairs_of_elements([1,2,3]), [(1, 2), (1, 3), (2, 3)])
        self.assertEqual(pairs_of_elements([1,2,3,4]), [(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)])
        self.assertEqual(pairs_of_elements([1]), [])
        self.assertEqual(pairs_of_elements([]), [])
        self.assertEqual(pairs_of_elements([1,2]), [(1, 2)])
        self.assertEqual(pairs_of_elements([(1, 2), (1, 3), (2, 3)]), [((1, 2), (1, 3)), ((1, 2), (2, 3)), ((1, 3), (2, 3))])

        
if __name__ == "__main__":
    unittest.main()
