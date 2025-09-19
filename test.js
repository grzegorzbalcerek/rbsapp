
function print(str) {
    console.log(str)
    document.write(str)
    document.write("<br>\n")
}

function testEq(actual, expectedj) {
    let actualResult = JSON.stringify(eval(actual))
    let eq = actualResult === expectedj
    if (eq) {
        print(`OK: ${actual} = ${expectedj}`);
    } else {
        print(`FAILED: ${actual}`)
        print(`EXPECTED: ${expectedj}`)
        print(`ACTUAL  : ${actualResult}`);
    }
}

function testT(actual) {
    let result = eval(actual)
    if (result) {
        print(`OK: ${actual}`);
    } else {
        print(`ERROR: ${actual} is not T | ACTUAL RESULT: ${result}`);
    }
}

function testF(actual) {
    let result = eval(actual)
    if (!result) {
        print(`OK: !${actual}`);
    } else {
        print(`ERROR: ${actual} is not F | ACTUAL RESULT: ${result}`);
    }
}

const J_4_51 = [
    {'chapter': 4, 'verse': 51, 'word': 1, 'gr': 'ἤδη', 'rmac': 'ADV', 'sn': 'G2235', 'en': 'already', 'es': 'Ya'},
    {'chapter': 4, 'verse': 51, 'word': 2, 'gr': 'δὲ', 'rmac': 'CONJ', 'sn': 'G1161', 'en': 'And', 'es': 'pero'},
    {'chapter': 4, 'verse': 51, 'word': 3, 'gr': 'αὐτοῦ', 'rmac': 'P-GSM', 'sn': 'G846', 'en': '[as] he', 'es': 'de él'},
    {'chapter': 4, 'verse': 51, 'word': 4, 'gr': 'καταβαίνοντος', 'rmac': 'V-PAP-GSM', 'sn': 'G2597', 'en': 'is going down,', 'es': 'estando dando pasos hacia abajo'},
    {'chapter': 4, 'verse': 51, 'word': 5, 'gr': 'οἱ', 'rmac': 'T-NPM', 'sn': 'G3588', 'en': '-', 'es': 'los'},
    {'chapter': 4, 'verse': 51, 'word': 6, 'gr': 'δοῦλοι', 'rmac': 'N-NPM', 'sn': 'G1401', 'en': 'servants', 'es': 'esclavos'},
    {'chapter': 4, 'verse': 51, 'word': 7, 'gr': 'αὐτοῦ', 'rmac': 'P-GSM', 'sn': 'G846', 'en': 'his', 'es': 'de él'},
    {'chapter': 4, 'verse': 51, 'word': 8, 'gr': 'ὑπήντησαν', 'rmac': 'V-AAI-3P', 'sn': 'G5221', 'en': 'met', 'es': 'fueron al encuentro'},
    {'chapter': 4, 'verse': 51, 'word': 9, 'gr': 'αὐτῷ', 'rmac': 'P-DSM', 'sn': 'G846', 'en': 'him,', 'es': 'a él'},
    {'chapter': 4, 'verse': 51, 'word': 10, 'gr': 'λέγοντες', 'rmac': 'V-PAP-NPM', 'sn': 'G3004', 'en': 'saying', 'es': 'estando diciendo'},
    {'chapter': 4, 'verse': 51, 'word': 11, 'gr': 'ὅτι', 'rmac': 'CONJ', 'sn': 'G3754', 'en': 'that', 'es': 'que'},
    {'chapter': 4, 'verse': 51, 'word': 12, 'gr': 'ὁ', 'rmac': 'T-NSM', 'sn': 'G3588', 'en': '-', 'es': 'el'},
    {'chapter': 4, 'verse': 51, 'word': 13, 'gr': 'παῖς', 'rmac': 'N-NSM', 'sn': 'G3816', 'en': 'son', 'es': 'muchachito'},
    {'chapter': 4, 'verse': 51, 'word': 14, 'gr': 'αὐτοῦ', 'rmac': 'P-GSM', 'sn': 'G846', 'en': 'his', 'es': 'de él'},
    {'chapter': 4, 'verse': 51, 'word': 15, 'gr': 'ζῇ', 'rmac': 'V-PAI-3S', 'sn': 'G2198', 'en': 'lives.', 'es': 'está viviendo'}]

testEq(`transliterate("a")`,`"a"`);
testEq(`transliterate("α")`,`"a"`);
testEq(`transliterate("αβγδαβ")`,`"abgdab"`);
testEq(`rangesParseVerseWord("",2,3)`,`[2,3]`);
testEq(`rangesParseVerseWord("1",2,3)`,`[1,3]`);
testEq(`rangesParseVerseWord("4.5",7,7)`,`[4,5]`);
testEq(`rangesParseChapterVerseWord("",7,8,9)`,`[7,8,9]`);
testEq(`rangesParseChapterVerseWord("1",7,8,9)`,`[7,1,9]`);
testEq(`rangesParseChapterVerseWord("2",undefined,7,8)`,`[2,7,8]`);
testEq(`rangesParseChapterVerseWord("2.3",7,8,9)`,`[7,2,3]`);
testEq(`rangesParseChapterVerseWord("1:2.3",undefined,8,9)`,`[1,2,3]`);
testEq(`rangesParseChapterVerseWord("1:2.3",7,8,9)`,`[1,2,3]`);
testEq(`rangesParseChapterVerseWord("1:2",undefined,undefined,9)`,`[1,2,9]`);
testEq(`rangesParseChapterVerseWord(undefined,undefined,undefined,9)`,`[1,2,9]`);
testEq(`rangesParseInput("").length`,`0`);
testEq(`rangesParseInput("2:1")`,`[[2,1,1,2,1,99]]`);
testEq(`rangesParseInput("2:1.1")`,`[[2,1,1,2,1,1]]`);
testEq(`rangesParseInput("2")`,`[[2,1,1,2,99,99]]`);
testEq(`rangesParseInput("2:1-12")`,`[[2,1,1,2,12,99]]`);
testEq(`rangesParseInput("2:1-4:12")`,`[[2,1,1,4,12,99]]`);
testEq(`rangesParseInput("2:77-4:12")`,`[[2,77,1,4,12,99]]`);
testEq(`rangesParseInput("2:77.3-4:12")`,`[[2,77,3,4,12,99]]`);
testEq(`rangesParseInput("2:77-4:12.3")`,`[[2,77,1,4,12,3]]`);
testEq(`rangesParseInput("2:77.3-4:12.5")`,`[[2,77,3,4,12,5]]`);
testEq(`rangesParseInput("3:22-4:3")`,`[[3,22,1,4,3,99]]`);
testEq(`rangesParseInput("2:77.3-4:12.5 6:7.8-15:16.17")`,`[[2,77,3,4,12,5],[6,7,8,15,16,17]]`);

var word1 = document.createElement("word")
word1.setAttribute("sn","G2532")
word1.setAttribute("rmac","CONJ")
word1.innerHTML=`<gr>Καὶ</gr><en>And</en><es>Y</es>`
testEq(`wordToItem(word1)`,`{"sn":"G2532","rmac":"CONJ","gr":"Καὶ","en":"And","es":"Y"}`);

var item1 = {"sn":"G2532","rmac":"CONJ","gr":"Καὶ","en":"And","es":"Y"}
testEq(`itemToWord(item1).outerHTML`,`"<word sn=\\"G2532\\" rmac=\\"CONJ\\"><gr>Καὶ</gr><en>And</en><es>Y</es></word>"`);

var parent = document.createElement("main")
var data = [{"sn":"G2532","rmac":"CONJ","gr":"Καὶ","en":"And","es":"Y"}]
testEq(`dataAndBoundariesToDOM(parent, data, [0,0]).innerHTML`,`"<word sn=\\"G2532\\" rmac=\\"CONJ\\"><gr>Καὶ</gr><en>And</en><es>Y</es></word>"`);

var parent = document.createElement("main")
var data = [{"sn":"G2532","rmac":"CONJ","gr":"Καὶ","en":"And","es":"Y"},{"sn":"G1096","rmac":"V-2ADI-3S","gr":"ἐγένετο","en":"took place","es":"llegó a ser"}]
testEq(`dataAndBoundariesToDOM(parent, data, [0,0,0]).innerHTML`,`"<word sn=\\"G2532\\" rmac=\\"CONJ\\"><gr>Καὶ</gr><en>And</en><es>Y</es></word><word sn=\\"G1096\\" rmac=\\"V-2ADI-3S\\"><gr>ἐγένετο</gr><en>took place</en><es>llegó a ser</es></word>"`);

var parent = document.createElement("main")
testEq(`dataAndBoundariesToDOM(parent, data, [1,0,1]).innerHTML`,`"<term><word sn=\\"G2532\\" rmac=\\"CONJ\\"><gr>Καὶ</gr><en>And</en><es>Y</es></word><word sn=\\"G1096\\" rmac=\\"V-2ADI-3S\\"><gr>ἐγένετο</gr><en>took place</en><es>llegó a ser</es></word></term>"`);

var parent = document.createElement("main")
var data = [{"sn":"G2532","rmac":"CONJ","gr":"Καὶ","en":"And","es":"Y"},
            {"sn":"G1096","rmac":"V-2ADI-3S","gr":"ἐγένετο","en":"took place","es":"llegó a ser"},
            {"sn":"G1722","rmac":"PREP","gr":"ἐν","en":"in","es":"en"},
            {"sn":"G2580","rmac":"N-DSF-L","gr":"Κανα","en":"Kana","es":"Cana"}]
testEq(`dataAndBoundariesToDOM(parent, data, [1,0,1,0,1]).innerHTML`,`"<term><word sn=\\"G2532\\" rmac=\\"CONJ\\"><gr>Καὶ</gr><en>And</en><es>Y</es></word><word sn=\\"G1096\\" rmac=\\"V-2ADI-3S\\"><gr>ἐγένετο</gr><en>took place</en><es>llegó a ser</es></word></term><term><word sn=\\"G1722\\" rmac=\\"PREP\\"><gr>ἐν</gr><en>in</en><es>en</es></word><word sn=\\"G2580\\" rmac=\\"N-DSF-L\\"><gr>Κανα</gr><en>Kana</en><es>Cana</es></word></term>"`);

function mkgoodness(page_width) {
    function goodness(words,boundaries,i,j) {
        let width = words.slice(i,j).join(" ").length
        if (width > page_width) {
            return -99999999
        } else {
            return -Math.pow(page_width - width, 3)
        }
    }
    return goodness
}
function words2line(pageWidth, words) {
    let holes = words.length - 1
    if (holes === 0) {
        return words.join(" ")
    } else {
        let spaces = pageWidth - words.join("").length
        let longSeparatorCount = spaces % holes
        let longSeparatorLength = Math.trunc(spaces / holes) + 1
        let longSeparator = Array(longSeparatorLength).fill(" ",0,longSeparatorLength).join("")
        let shortSeparatorLength = Math.trunc(spaces / holes)
        let shortSeparator = Array(shortSeparatorLength).fill(" ",0,shortSeparatorLength).join("")
        let firstPart = words.slice(0, longSeparatorCount).join(longSeparator)
        let secondPart = words.slice(longSeparatorCount).join(shortSeparator)
        if (longSeparatorCount === 0) {
            return secondPart
        } else {
            return firstPart + longSeparator + secondPart
        }
    }
}
function mkjustify(pageWidth) {
    return (arr,i,j) => words2line(pageWidth,arr.slice(i,j))
}
var ALA = ["Ala","ma","psa","Asa"]
var OLA = ["Ola","ma","kota","Filemona"]

testEq(`boundariesToIndices([],1)`,`[]`);
testEq(`boundariesToIndices([0, 0],0)`,`[0,1]`);
testEq(`boundariesToIndices([1,0,0,1],1)`,`[0,3]`);
testEq(`boundariesToIndices([2,0,0,1,0,1,0,0,0,2],1)`,`[0,3,5,9]`)
testEq(`boundariesToIndices([2,0,0,1,0,1,0,0,2],1)`,`[0,3,5,8]`)
testEq(`boundariesToIndices([2,0,1,0,0,2,0,0,1,0,1,0,0,2,0,0,1,0,2],1,5,13)`,`[5,8,10,13]`)

testEq(`mkgoodness(8)(OLA,[0,0,0,0,0],1,3)`,`-1`)

testEq(`calculateScores(OLA,[0,0,0,0,0],0,mkgoodness(8))`,`{"0,1":-125,"0,2":-8,"0,3":-99999999,"0,4":-99999999,"1,2":-216,"1,3":-1,"1,4":-99999999,"2,3":-64,"2,4":-99999999,"3,4":0}`)
testEq(`calculateScores(OLA,[0,0,0,0,0],0,mkgoodness(11))`,`{"0,1":-512,"0,2":-125,"0,3":0,"0,4":-99999999,"1,2":-729,"1,3":-64,"1,4":-99999999,"2,3":-343,"2,4":-99999999,"3,4":-27}`)
testEq(`calculateScores(OLA,[0,0,0,0,0],0,mkgoodness(12))`,`{"0,1":-729,"0,2":-216,"0,3":-1,"0,4":-99999999,"1,2":-1000,"1,3":-125,"1,4":-99999999,"2,3":-512,"2,4":-99999999,"3,4":-64}`)

testEq(`mkjustify(6)(ALA,1,3)`,`"ma psa"`)

var boundaries = [0,0,0,0,0]
var scores = calculateScores(ALA,[0,0,0,0,0],0,mkgoodness(6))
testEq(`calculateScores(ALA,[0,0,0,0,0],0,mkgoodness(6))`,`{"0,1":-27,"0,2":0,"0,3":-99999999,"0,4":-99999999,"1,2":-64,"1,3":0,"1,4":-99999999,"2,3":-27,"2,4":-99999999,"3,4":-27}`)
var [dp,pp] = calculateDpSuffixes(scores, boundaries, 0)
testEq(`dp`, `{"0":-54,"1":-27,"2":-54,"3":-27}`)
testEq(`pp`, `{"0":1,"1":3,"2":3,"3":4}`)
var newBoundaries = ppUpdateBoundaries(pp, boundaries, 1)
testEq(`ppUpdateBoundaries(pp, boundaries, 1)`, `[1,1,0,1,1]`)

scores = calculateScores(ALA,[0,0,0,0,0],0,mkgoodness(7))
testEq(`calculateScores(ALA,[0,0,0,0,0],0,mkgoodness(7))`,`{"0,1":-64,"0,2":-1,"0,3":-99999999,"0,4":-99999999,"1,2":-125,"1,3":-1,"1,4":-99999999,"2,3":-64,"2,4":0,"3,4":-64}`)
var [dp,pp] = calculateDpSuffixes(scores, boundaries, 0)
testEq(`dp`, `{"0":-1,"1":-65,"2":0,"3":-64}`)
testEq(`pp`, `{"0":2,"1":3,"2":4,"3":4}`)
var newBoundaries = ppUpdateBoundaries(pp, boundaries, 1)
testEq(`ppUpdateBoundaries(pp, boundaries, 1)`, `[1,0,1,0,1]`)

testF(`isVerb(undefined)`);
testF(`isVerb({})`);
testT(`isVerb({"rmac":"V-ABC"})`);
testF(`isVerb({"rmac":"N-ABC"})`);
testF(`isVerb({"rmac":"NV-ABC"})`);
testT(`isPrefixWord({"rmac":"CONJ"})`);
testT(`!isPrefixWord({"rmac":"V-AAAA"})`);
testT(`isSecondWord({"sn":"G1161"})`);
testT(`!isSecondWord({"sn":"G1162"})`);
testT(`isMainWord({"rmac":"N-AA"})`);
testT(`!isMainWord({"rmac":"CONJ"})`);
testEq(`scoreTerm(J_4_51,undefined,0,1)`,`10`);
testEq(`scoreTerm(J_4_51,undefined,1,2)`,`-100`);
testEq(`scoreTerm(J_4_51,undefined,0,2)`,`14`);
testEq(`scoreTerm(J_4_51,undefined,0,3)`,`-100`);
testEq(`scoreTerm(J_4_51,undefined,4,5)`,`-100`);

var boundaries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var scores = calculateScores(J_4_51,boundaries,0,scoreTerm)
var [dp,pp] = calculateDpSuffixes(scores, boundaries, 0)
var boundaries1 = ppUpdateBoundaries(pp, boundaries, 1)
testEq(`boundaries1`, `[1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1]`)

testEq(`scoreWordSimilarity(J_4_51[0],J_4_51[1])`, `0`)
testEq(`scoreWordSimilarity(J_4_51[2],J_4_51[6])`, `3`)
testEq(`scoreWordSimilarity(J_4_51[6],J_4_51[8])`, `2`)

testEq(`pairsOfElements([])`,`[]`)
testEq(`pairsOfElements([1])`,`[]`)
testEq(`pairsOfElements([1,2])`,`[[1,2]]`)
testEq(`pairsOfElements([1,2,3])`,`[[1,2],[1,3],[2,3]]`)
testEq(`pairsOfElements([1,2,3,4])`,`[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]`)

testEq(`boundariesToRanges([2,0,1,0,0,2,0,0,1,0,1,0,0,2,0,0,1,0,2],1,5,13)`,`[5,8,10,13]`)
testEq(`indicesToRanges([5,8,10,13])`,`[[5,8],[8,10],[10,13]]`)
