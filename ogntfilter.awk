BEGIN {
    if (book == "Matt" || book == "Mt") {
        booknum = 40;
    } else if (book == "John" || book == "J") {
        booknum = 43;
    }
    if (!booknum) {
        print("ERROR: unrecognized book ["book"]")
        exit(1);
    }
    range1 = range
    range2 = range
    gsub("-[^-]*$","",range1)
    gsub("^[^-]*-","",range2)
    chapter1 = range1
    verse1 = range1
    gsub("[:,][^:,]*$","",chapter1)
    gsub("^[^:,]*[:,]","",verse1)
    chapter2 = range2
    verse2 = range2
    gsub("[:,][^:,]*$","",chapter2)
    gsub("^[^:,]*[:,]","",verse2)
    verse2plus = verse2 + 1
    chapter2plus = chapter2 + 1
    range1re = "〔"booknum"｜"chapter1"｜"verse1"〕"
    range2re = "〔"booknum"｜"chapter2"｜"verse2plus"〕|〔"booknum"｜"chapter2plus"｜"1"〕"
}
$7 ~ range1re, $7 ~ range2re { if ($7 !~ range2re) print }
