
import os
import re
import sys


def get_coords():
    if len(sys.argv) < 2:
        return "J2:1-2:2"
    else:
        return sys.argv[1]


def parse_coords(input):
    m = re.match("(.*[A-Za-z]+)([0-9:.]+)-([0-9:.]+)",input)
    if m:
        book = parse_book(m.group(1))
        coord1 = parse_coord(m.group(2),1)
        coord2 = parse_coord(m.group(3),99)
        return (book, coord1, coord2)
    m = re.match("(.*[A-Za-z]+)([0-9:.]+)",input)
    if m:
        return (parse_book(m.group(1)),
                parse_coord(m.group(2),1),
                parse_coord(m.group(2),99))
    raise Exception(f"Unable to parse {input}")


def parse_book(book):
    match(book):
        case "J"|"John"|"Jan":
            return 43
        case _:
            raise Exception(f"Unrecognized book {book}")


def parse_coord(arg, default_wordnum = None):
    lst = re.split(r"[:.]", arg)
    if len(lst) == 2:
        wordnum = default_wordnum
    elif len(lst) != 3:
        raise Exception(f"Unable to parse {arg}")
    else:
        wordnum = int(lst[2])
    chapter = int(lst[0])
    verse = int(lst[1])
    return normalize_coord(chapter, verse, wordnum)


def normalize_coord(chapter, verse, wordnum):
    return f"{chapter:02}:{verse:02}.{wordnum:02}"


def load(arg = None):
    if not arg:
        arg = get_coords()
    (bk, frm, to) = parse_coords(arg)
    file_path = os.environ["HOME"] + "/repos/OpenGNT/OpenGNT_version3_3.csv"
    verse = -1
    result = []
    with open(file_path, encoding="utf-8") as f:
        f.readline()
        for line in f:
            item = {}
            columns = line.split("\t")
            fields6 = columns[6][1:-1].split("｜")
            book = int(fields6[0])
            chapter = int(fields6[1])
            prev_verse = verse
            verse = int(fields6[2])
            wordnum = wordnum + 1 if verse == prev_verse else 1
            coordinate = normalize_coord(chapter, verse, wordnum)
            item["chapter"] = chapter
            item["verse"] = verse
            item["wordnum"] = wordnum
            item["coordinate"] = coordinate
            if book != bk or coordinate < frm or coordinate > to:
                continue
            fields7 = columns[7][1:-1].split("｜")
            item["gr"] = fields7[2]
            item["rmac"] = fields7[4]
            item["sn"] = fields7[5]
            fields10 = columns[10][1:-1].split("｜")
            item["en"] = fields10[2]
            item["es"] = fields10[4]
            result.append(item)
    return result


if __name__ == "__main__":
    text = load()
    for word in text: print(word)
