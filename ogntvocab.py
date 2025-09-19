import re, sys

assert len(sys.argv) > 2, "Expected 2 or 3 arguments: <book> <range> [OpenGNT-file-path]"
book = sys.argv[1]
range = sys.argv[2]
ogntfile = "../OpenGNT/OpenGNT_version3_3.csv"
if book == "Matt" or book == "Mt":
    booknum = 40
elif book == "John" or book == "J":
    booknum = 43

if not booknum:
    raise f"ERROR: unrecognized book [{book}]"

ranges = re.split("[:-]",range)
chapter1 = ranges[0]
chapter2 = ranges[2]
verse1 = ranges[1]
verse2 = ranges[3]
verse2plus = int(verse2) + 1
chapter2plus = int(chapter2) + 1
range1re = f"〔{booknum}｜{chapter1}｜{verse1}〕"
range2re = f"〔{booknum}｜{chapter2}｜{verse2plus}〕|〔{booknum}｜{chapter2plus}｜1〕"

with open(ogntfile, encoding="utf-8") as f:
    between = False
    count = {}
    data = {}
    lexemes = {}
    coords = {}
    for line in f:
        fields = re.split("\t", line)
        if not between and re.match(range1re,fields[6]):
            between = True
        if between and re.match(range2re,fields[6]):
            between = False
        if between:
            items = re.split("[〔｜〕]", fields[7])
            lexeme = items[4]
            sn = items[6]
            num = count.get(sn) or 0
            count[sn] = num + 1
            lexemes[sn] = lexeme
            items = re.split("[〔｜〕]", fields[6])
            chapter = items[2]
            verse = items[3]
            coords[sn] = (coords.get(sn) or "") + f" {chapter}:{verse}"
    results = sorted(count.items(), key = lambda item: item[1], reverse = True)
    for item in results:
        num = item[1]
        sn = item[0]
        lexeme = lexemes[sn]
        coord = coords[sn]
        if num <= 10:
            print(f"{lexeme} {sn} {num}{coord}")
