app = {
    "actions" : {},
    "buttons" : {},
    "colors" : [
        "background-color: #b080ff",
        "background-color: #8080ff",
        "background-color: #80ffff",
        "background-color: #80bfff",
        "background-color: #6060b0",
        "background-color: #609999",
        "background-color: #80ff80",
        "background-color: #40ee40",
        "background-color: #a0a060",
        "background-color: #ffff80",
        "background-color: #ffbc40",
        "background-color: #800000",
        "background-color: #ff80ff",
        "background-color: #ff8080",
        "background-color: #ff8000",
        "background-color: #ffa0ff",
        "background-color: #808080",
        "background-color: #ff9090",
        "color: #8000ff",
        "color: #0000ff",
        "color: #00eeee",
        "color: #00afff",
        "color: #000080",
        "color: #009999",
        "color: #008000",
        "color: #00ee00",
        "color: #808000",
        "color: #eeee00",
        "color: #ffbc00",
        "color: #800000",
        "color: #ff00ff",
        "color: #ff8080",
        "color: #ff8000",
        "color: #ff80ff",
        "color: #808080",
    "color: #ff0000"],
    "languages" : ["gr", "tl", "fr", "it", "en", "pl", "pt", "es"],
    "markers" : null,
    "markerGroups" : [
        ["nocolorf", "colorfa", "colorfb", "colorfc", "colorfd", "colorfe", "colorff", "colorfg", "colorfh", "colorfi",
         "colorfj", "colorfk", "colorfl", "colorfm", "colorfn", "colorfo", "colorfp", "colorfq", "colorfr", "colorfs",
         "colorft", "colorfu", "colorfv", "colorfw", "colorfx", "colorfy", "colorfz"],
        ["nocolorb", "colorba", "colorbb", "colorbc", "colorbd", "colorbe", "colorbf", "colorbg", "colorbh", "colorbi",
         "colorbj", "colorbk", "colorbl", "colorbm", "colorbn", "colorbo", "colorbp", "colorbq", "colorbr", "colorbs",
         "colorbt", "colorbu", "colorbv", "colorbw", "colorbx", "colorby", "colorbz"],
        ["bold"],
        ["italic"],
        ["smallcaps"],
        ["noleft", "left0c5", "left1", "left1c5", "lefl2", "lefl2c5", "left3"],
        ["noright", "right1d16", "right1d8", "right1d4", "right0c5", "right1", "right1c5", "right2", "right2c5", "right3"],
        ["noprefix", "prefixplus", "prefixminus", "prefixeq", "prefixdot", "prefixpoint", "prefixcolon", "prefix2colons",
         "prefixmult", "prefixa", "prefixb", "prefixc", "prefixap", "prefixbp", "prefixcp"],
        ["nodown", "down1", "down2", "down3"],
        ["center"]
    ],
    "state" : {
        "inputRing" : [],
        "prevLang" : null,
        "currLang" : null,
        "range1value" : 0,
        "range2value" : 100
    },
    "levels" : ["book", "section", "subsection", "sequence", "subsequence", "passage", "part", "subpart", "piece", "segment", "member", "term", "word"],
    "langs" : ["gr", "en", "es", "fr", "it", "pl", "tl"],
    "levelNames" : {
        "en": {
            "BOOK": "Book",
            "SECTION": "Section",
            "SUBSECTION": "Subsection",
            "SEQUENCE": "Sequence",
            "SUBSEQUENCE": "Subsequence",
            "PASSAGE": "Passage"
        },
        "es": {
            "BOOK": "Libro",
            "SECTION": "Sección",
            "SUBSECTION": "Subsección",
            "SEQUENCE": "Sequencia",
            "SUBSEQUENCE": "Subsequencia",
            "PASSAGE": "Pasaje"
        },
        "fr": {
            "BOOK": "Livre",
            "SECTION": "Section",
            "SUBSECTION": "Sousection",
            "SEQUENCE": "Sequence",
            "SUBSEQUENCE": "Subsequence",
            "PASSAGE": "Passage"
        },
        "it": {
            "BOOK": "Libro",
            "SECTION": "Sezione",
            "SUBSECTION": "Sottosezione",
            "SEQUENCE": "Sequenza",
            "SUBSEQUENCE": "Sottosequenza",
            "PASSAGE": "Passo"
        },
        "pl": {
            "BOOK": "Księga",
            "SECTION": "Sekcja",
            "SUBSECTION": "Podsekcja",
            "SEQUENCE": "Sekwencja",
            "SUBSEQUENCE": "Podsekwencja",
            "PASSAGE": "Fragment"
        },
        "pt": {
            "BOOK": "Livro",
            "SECTION": "Secção",
            "SUBSECTION": "Subsecção",
            "SEQUENCE": "Sequência",
            "SUBSEQUENCE": "Subsequência",
            "PASSAGE": "Passagem"
        }
    },
    "punctuations": {
        "gr": ["☐"],
        "en": ["☐"],
        "es": ["☐"],
        "fr": ["☐"],
        "it": ["☐"],
        "pl": ["☐", "„☐", "«☐", "☐,", "☐:", "☐.", "☐!", "☐?", "☐”", "☐”.", "☐!”.", "☐?”.", "☐»", "☐»,", "☐»”.", "☐»!”", "☐»?”"],
        "pt": ["☐"]
    }
}

function initRbsApp() {
    app.langSelect = document.getElementById("langselect");
    app.levelSelect = document.getElementById("levelselect");
    app.showEmptyWordsCheckbox = document.getElementById("showemptywordscheckbox");
    app.spreadCheckbox = document.getElementById("spreadcheckbox");
    app.summaryCheckbox = document.getElementById("summarycheckbox");
    app.fontSizeSelect = document.getElementById("fontsizeselect");
    app.termSizeSelect = document.getElementById("termsizeselect");
    app.body = document.getElementById("body");
    app.content = document.getElementById("content");
    app.aux = document.getElementById("aux");
    app.main = document.getElementById("main");
    app.rangesInput = document.getElementById("rangesinput");
    app.recoverInputButton = document.getElementById("recoverinputbutton");
    app.punctuationSelect = document.getElementById("punctuationselect");
    app.punctuationButtons = document.getElementById("punctuationbuttons");
    app.statusBar = document.getElementById("statusbar");
    app.documentsSelect = document.getElementById("documentsselect");
    app.snButton = document.getElementById("snbutton");
    app.rmacButton = document.getElementById("rmacbutton");
    app.range1 = document.getElementById("range1");
    app.range2 = document.getElementById("range2");
    app.selectionLevelBordersCheckbox = document.getElementById("selectionlevelborderscheckbox");
    app.textArea = document.getElementById("textarea");
    app.textAreaResizeObserver = new ResizeObserver((entries) => textAreaResized());
    app.textAreaResizeObserver.observe(app.textArea);
    app.markers = app.markerGroups.flat();
    for (let marker of app.markers) {
        app.buttons[marker] = document.getElementById(`button_${marker}`);
        app.actions[marker] = element => updateMarker(element, marker);
    }
    app.buttons["case"] = document.getElementById(`button_case`);
    app.actions["case"] = element => singleClickModifyWord(element, updateCase)
    for (let button of document.querySelectorAll("button")) {
        if (button.id.startsWith("button_punctuation")) {
            app.buttons[button.id.slice(7)] = button;
            app.actions[button.id.slice(7)] = element => singleClickModifyWord(element, updatePunctuation(button.id.slice(18)))
        }
    }
    app.modeButtons = {};
    app.modes = ["lock", "structuremain", "structurefocus", "text"];
    for (let mode of app.modes) {
        app.modeButtons[mode] = document.getElementById("button_" + mode);
    }
    app.wordStyleSheet = new CSSStyleSheet()
    document.adoptedStyleSheets = [ app.wordStyleSheet ]
    if (app.snButton && app.rmacButton) {
        updateWordStyleSheet()
    }
    if (app.documentsSelect) {
        storageOnDocuments(documents => {
            storagePopulateDocumentsSelect(documents, "");
            const doc = localStorage.getItem("doc");
            if (doc && documents.includes(doc)) {
                app.documentsSelect.value = doc;
            };
        });
        storageLoadDocument();
    }
    app.state.range1value = parseInt(app.range1.value);
    app.state.range2value = parseInt(app.range2.value);
    populateLangsSelect();
    populateLevelsSelect();
    updateDom(app.main);
    app.main.classList.add("markers");
    app.main.addEventListener("click", singleClick);
    app.main.addEventListener("dblclick", doubleClick);
    app.range1.addEventListener("dblclick", dblclickRange);
    app.range2.addEventListener("dblclick", dblclickRange);
}

function singleClick(e) {
    if (isMode("lock")) {
        runLockerActions(findTagUpwards(e.target, "WORD"));
    } else {
        singleClickNormal(e);
    }
}

function singleClickModifyWord(word, f) {
    if (word) {
        let langElement = word.querySelector(app.langSelect.value);
        if (langElement) {
            f(langElement, app.langSelect.value);
        }
        storageDocModified();
    }
}

function updateCase(element) {
    for (n of element.childNodes) {
        if (n.nodeType === 3) {
            if (n.textContent) {
                let firstChar = n.textContent.charAt(0)
                if (firstChar.toUpperCase() === firstChar) {
                    firstChar = firstChar.toLowerCase();
                } else {
                    firstChar = firstChar.toUpperCase();
                }
                n.textContent = firstChar + n.textContent.substring(1);
            }
            break;
        }
    }
}

function updatePunctuation(punctuation) {
    return function(element) {
        if (punctuation === "|") {
            removeSpans(element);
	} else if (punctuation === "_|") {
            updatePrefix(element, "");
	} else if (punctuation === "|_") {
            updateSuffix(element, "");
        } else if (punctuation.endsWith("|")) {
            updatePrefix(element, punctuation.slice(0,-1));
        } else if (punctuation.startsWith("|")) {
            updateSuffix(element, punctuation.slice(1));
        }
    }
}

function updatePrefix(element, text) {
    updateSpan(element, findFirstSpan, text, newSpan => element.insertBefore(newSpan, element.firstChild));
}

function updateSuffix(element, text) {
    updateSpan(element, findLastSpan, text, newSpan => element.appendChild(newSpan));
}

function findFirstSpan(element) {
    if (element.childNodes.length > 0 && element.childNodes[0].nodeType === 1 && element.childNodes[0].nodeName === "SPAN") {
        return element.childNodes[0];
    }
}

function findLastSpan(element) {
    let last = element.childNodes.length - 1;
    if (last >= 0 && element.childNodes[last].nodeType === 1 && element.childNodes[last].nodeName === "SPAN") {
        return element.childNodes[last];
    }
}

function removeSpans(element) {
    for (let j = element.childNodes.length - 1; j >= 0; j--) {
        if (element.childNodes[j].nodeType === 1 && element.childNodes[j].nodeName === "SPAN") {
            element.removeChild(element.childNodes[j]);
        }
    }
}

function updateSpan(element, findSpanFunction, text, insertFunction) {
    let span = findSpanFunction(element);
    if (span) {
        let newText = document.createTextNode(text);
        span.replaceChildren(newText);
    } else {
        let newSpan = createElementWithText("span", text);
        insertFunction(newSpan);
    }
}

function singleClickNormal(e) {
    withFocus(focus => {
        if (isMain(focus)) {
            if (app.summaryCheckbox && app.summaryCheckbox.checked) {
                return e.target;
            } else {
                return findTagUpwards(e.target, "WORD");
            }
        } else {
            let element = findTagUpwards(e.target, focus.tagName);
            if (element) {
                if (element === focus) {
                    return element.parentElement;
                } else {
                    return element;
                }
            } else {
                if (focus.children && focus.children.length > 0 && levelNumber(focus.children[0].tagName) >= 0) {
                    return focus.children[0];
                }
            }
        }
    });
}

function capitalize(str) {
    if (str) {
        let firstChar = str.charAt(0)
        return firstChar.toUpperCase() + str.substring(1);
    }
}

function doubleClick(e) {
    withFocus(focus => {
        return findTagUpwards(e.target, "WORD");
    });
}

function findTagUpwards(element, targetTag) {
    return findUpwards(element, elem => (levelNumber(elem.tagName) === levelNumber(targetTag)));
}

function findUpwards(element, isFound) {
    while (!isThisTopElement(element)) {
        if (isFound(element)) {
            return element;
        }
        element = element.parentElement;
    }
}

function runLockerActions(element) {
    if (element) {
        for (item of getLockerItems()) {
            let action = app.actions[item];
            if (action) {
                action(element);
            }
        }
    }
}

function getLockerItems() {
    let locker = app.main.getAttribute("locker");
    if (locker) {
        return locker.split(" ");
    } else {
        return [];
    }
}

function textAreaResized() {
    let textAreaHeight = getComputedStyle(app.textArea).height;
    app.content.style = `top: calc(183px + ${textAreaHeight})`
}

function populateLangsSelect() {
    populateSelect(app.langSelect, app.langs);
}

function populateLevelsSelect() {
    populateSelect(app.levelSelect, app.levels);
}

function filteredOptionValues(selectElem, keepp) {
    let result = [];
    if (keepp) {
        for (const o of selectElem.options) {
            if (keepp(o.value)) {
                result.push(o.value);
            }
        }
    }
    return result
}

function populateSelect(selectElem, values) {
    const beforeValue = selectElem.value
    selectElem.replaceChildren();
    if (values) {
        for (const v of values) {
            selectElem.appendChild(makeOption(v));
        }
        if (beforeValue) {
            const prevValue = selectElem.value
            selectElem.value = beforeValue
            if (!selectElem.value) {
                selectElem.value = prevValue
            }
        }
    }
}

function makeOption(text) {
    let opt = document.createElement("option");
    opt.value = text;
    const textNode = document.createTextNode(text);
    opt.appendChild(textNode);
    return opt;
}

function levelSelected() {
    updateDomMainLevel();
}

function selectLevel(level) {
    app.levelSelect.value = level;
    updateDomMainLevel();
}

function currentLevels() {
    let levels = []
    for (const c of app.levelSelect) {
        levels.push(c.value);
    }
    return levels;
}

function changeLevel(findFunction) {
    let level = findFunction(currentLevels(), app.levelSelect.value)
    if (level) {
        app.levelSelect.value = level;
        levelSelected();
    }
}

function levelUp() {
    changeLevel(findPrev);
}

function levelDown() {
    changeLevel(findNext);
}

function summaryCheckboxSelected() {
    updateDomMainSummary();
}

function spreadCheckboxSelected() {
    updateDomMainSpread();
}

function updateDom(elem) {
    langSelected();
    checkShowEmptyWords();
    updateDomMainLevel();
    updateDomMainSummary();
    updateDomMainSpread();
    onFontSizeUpdate();
    onTermSizeUpdate();
    updateDomTransliteration(elem);
    updateDomMainAddr(elem);
    updateDomMainTitles(elem, "word");
}

function updateViewForElement(element) {
    updateStatusBar(element);
    updateDomMainTitles(element);
    updateTextArea(element);
    updateDom(element);
    updateWordStyleSheet()
}

function langSelected() {
    app.main.setAttribute("lang", app.langSelect.value);
    if (app.langSelect.value !== app.state.currLang) {
        app.state.prevLang = app.state.currLang;
        app.state.currLang = app.langSelect.value;
    }
    populateForLang(app.langSelect.value);    
}

function restorePrevLang() {
    if (app.state.prevLang) {
        app.langSelect.value = app.state.prevLang;
        langSelected();
    }
}

function checkShowEmptyWords() {
    mainFlagAttribute(app.showEmptyWordsCheckbox, "showemptywords");
}

function updateDomMainLevel() {
    if (app.levelSelect) {
        main.setAttribute("level", app.levelSelect.value)
    }
}

function updateDomMainSummary() {
    mainFlagAttribute(app.summaryCheckbox, "summary");
}

function updateDomMainSpread() {
    mainFlagAttribute(app.spreadCheckbox, "spread");
}

function mainFlagAttribute(checkbox, attribute) {
    if (checkbox && checkbox.checked) {
        app.main.setAttribute(attribute, "true")
    } else {
        app.main.removeAttribute(attribute)
    }
}

function changeSize(delta, selectElement, minValue, maxValue, onUpdateFunction) {
    let size = selectElement.value;
    if (size) {
        size = Math.min(maxValue,Math.max(minValue,parseInt(size) + delta));
        selectElement.value = size;
        onUpdateFunction();
    }
}

function changeFontSize(delta) {
    changeSize(delta, app.fontSizeSelect, 7, 15, onFontSizeUpdate);
}

function increaseFontSize() {
    changeFontSize(1);
}

function decreaseFontSize() {
    changeFontSize(-1);
}

function onFontSizeUpdate() {
    if (app.fontSizeSelect) {
        main.setAttribute("fontsize", app.fontSizeSelect.value)
    }
}

function changeTermSize(delta) {
    changeSize(delta, app.termSizeSelect, 12, 20, onTermSizeUpdate);
}

function increaseTermSize() {
    changeTermSize(1);
}

function decreaseTermSize() {
    changeTermSize(-1);
}

function onTermSizeUpdate() {
    if (app.termSizeSelect) {
        main.setAttribute("termsize", app.termSizeSelect.value)
    }
}

function updateDomMainVisibility(rangesInput) {
    app.main.removeAttribute("visibleranges")
    removeVisibility(app.main)
    if (rangesInput !== "") {
        app.main.setAttribute("visibleranges", rangesInput);
        markVisibility(app.main, rangesInput);
    }
}

function removeVisibility(element) {
    visitElement(element, (elem, level, position) => elem.removeAttribute("visible"))
}

function markVisibility(element, rangesInput) {
    let ranges = rangesParseInput(rangesInput);
    let elements = domCollectElements(element, ["chapter","verse","word"]);
    let filteredElements = rangesFilterElements(ranges, elements);
    markElementsAsVisible(filteredElements.flat());
}

function visitMain(f) {
    visitElement(app.main, f);
}

function visitElement(element, f) {
    visitElements(element, 0, 0, f);
}

function visitElements(element, level, position, f) {
    f(element, level, position);
    let childPosition = 0;
    for (const e of element.children) {
        visitElements(e, level+1, childPosition, f);
        childPosition = childPosition + 1;
    }
}

function visitElements2(element, f) {
    f(element, true);
    for (const e of element.children) {
        visitElements2(e, f);
    }
    f(element, false);
}

function rangesParseInput(value) {
    // parse the value and return a list of 3-element sublists
    // expected value example: "2:1-12;4:43-456 5:2,4-6:5,7"
    // list (separated with a space or a semicolon) of chapters followed by colon, followed by a comma-separated list of verses or verse ranges
    // each result sublist contains: [chapter, verse range start, verse range stop]
    let start, end;
    let ranges = [];
    for (range of value.split(/[ ;]/)) {
        if (range) {
            let splitResult = range.split("–");
            switch (splitResult.length) {
            case 1:
                start = rangesParseChapterVerseWord(splitResult[0], undefined, 1, 1);
                end = rangesParseChapterVerseWord(splitResult[0], undefined, 99, 99);
                ranges.push([...start, ...end]);
                break;
            case 2:
                start = rangesParseChapterVerseWord(splitResult[0], undefined, 1, 1);
                end = rangesParseChapterVerseWord(splitResult[1], start[0], 99, 99);
                ranges.push([...start, ...end]);
                break;
            }
        }
    }
    ranges.sort(rangeCompare);
    return ranges;
}

function rangeCompare(a, b) {
    const anum = a[0]*1000000 + a[1]*1000 + a[2]
    const bnum = b[0]*1000000 + b[1]*1000 + b[2]
    return anum - bnum
}

function rangesParseChapterVerseWord(input, defaultChapter, defaultVerse, defaultWord) {
    if (input) {
        let splitResult = input.split(":");
        switch (splitResult.length) {
        case 1:
            if (defaultChapter) {
                return [defaultChapter, ...rangesParseVerseWord(splitResult[0], defaultVerse, defaultWord)];
            } else {
                return [parseInt(splitResult[0]), defaultVerse, defaultWord];
            }
        case 2:
            return [parseInt(splitResult[0]), ...rangesParseVerseWord(splitResult[1], defaultVerse, defaultWord)];
        }
    } else {
        return [defaultChapter, defaultVerse, defaultWord];
    }
}

function rangesParseVerseWord(input, defaultVerse, defaultWord) {
    let result = undefined
    if (!input) {
        return [defaultVerse, defaultWord];
    } else {
        let splitResult = input.split(".");
        switch (splitResult.length) {
        case 1:
            return [parseInt(input), defaultWord];
        case 2:
            return [parseInt(splitResult[0]), parseInt(splitResult[1])];
        }
    }
}

function rangesFilterElements(rangesArg, elementsArg) {
    let result = [];
    let subresult = [];
    let ranges = rangesArg.values();
    let elements = elementsArg.values();
    let range = ranges.next();
    let element = elements.next();
    while(range.value && element.value) {
        const start = [range.value[0],range.value[1],range.value[2]]
        const end = [range.value[3],range.value[4],range.value[5]]
        const addr = element.value.getAttribute("addr")
        let [chapter,verse,word] = rangesParseChapterVerseWord(addr)
        if (chapter && verse && word && range.value && addrCompare([chapter,verse,word], end) > 0) {
            range = ranges.next();
            result.push(subresult);
            subresult = [];
        } else if (chapter && verse && word &&
                   addrCompare([chapter,verse,word], start) >= 0 &&
                   addrCompare([chapter,verse,word], end) <= 0) {
            subresult.push(element.value);
            element = elements.next();
        } else {
            element = elements.next();
        }
    }
    if (subresult && subresult.size > 0) result.push(subresult);
    return result;
}

function rangesParseVerse(input, defaultVerse) {
    if (!input) {
        return defaultVerse;
    }
    const verseInt = parseInt(input);
    if (verseInt) {
        return verseInt;
    } else {
        return defaultVerse;
    }
}

function addrCompare(addr1, addr2) {
    if (addr1[0] > addr2[0]) {
        return 1;
    } else if (addr1[0] < addr2[0]) {
        return -1;
    } else if (addr1[1] > addr2[1]) {
        return 1;
    } else if (addr1[1] < addr2[1]) {
        return -1;
    } else if (addr1[2] > addr2[2]) {
        return 1;
    } else if (addr1[2] < addr2[2]) {
        return -1;
    } else {
        return 0;
    }
}

function markElementsAsVisible(elementsArg) {
    let elements = elementsArg.values();
    let element = elements.next();
    while(element.value) {
        markElementAndAncestorsAsVisible(element.value);
        element = elements.next();
    }
}

function markElementAndAncestorsAsVisible(element) {
    if (element.getAttribute("visible")) {
        return;
    }
    element.setAttribute("visible", "true");
    if (element === app.main) {
        return;
    }
    markElementAndAncestorsAsVisible(element.parentElement);
}

function domCollectElements(rootElem, tags) {
    let elements = []
    for (const tag of tags) {
        if (rootElem.tagName.toLowerCase() === tag.toLowerCase()) {
            elements.push(rootElem);
        }
        for (const item of rootElem.getElementsByTagName(tag)) {
            elements.push(item);
        };
    };
    elements.sort(compareElementsOrder);
    return elements;
}

function compareElementsOrder(element1, element2) {
    switch (element1.compareDocumentPosition(element2)) {
    case Node.DOCUMENT_POSITION_PRECEDING: return 1;
    case Node.DOCUMENT_POSITION_CONTAINS: return 1;
    case Node.DOCUMENT_POSITION_FOLLOWING: return -1;
    case Node.DOCUMENT_POSITION_CONTAINED_BY: return -1;
    default: return 0;
    }
}

function isThisTopElement(element) {
    return element && element.parentElement && element.parentElement.id === "main";
}

function updateDomMainTitles(element, destinationTag) {
    if (destinationTag && element.tagName.toLowerCase() === destinationTag) {
        let title = "";
        for (const a of [element.getAttribute("addr"), element.getAttribute("sn"), element.getAttribute("rmac")]) {
            if (title !== "") {
                title += "\n"
            }
            if (a) {
                title += a;
            }
        }
        for (const e of element.children) {
            if (title !== "") {
                title += "\n"
            }
            title += `${e.tagName.toLowerCase()}: ${e.textContent}`;
        }
        element.title = title;
    } else {
        element.removeAttribute("title");
    }
    for (const e of element.children) {
        updateDomMainTitles(e, destinationTag);
    }
}

function updateDomMainAddr(element) {
    updateDomMainIds(element)
    let levels = app.levels.slice().reverse().slice(1)
    for (level of levels) {
        let elements = domCollectElements(element, [level]);
        updateDomMainRanges(elements)
    }
}

function updateDomMainRanges(elements, fromAttr, toAttr) {
    let elementsGenerator = elements.values();
    let eObj = elementsGenerator.next();
    while(!eObj.done) {
        let element = eObj.value
        let from = undefined
        let to = undefined
        for (e of element.children) {
            if (!from) {
                from = e.getAttribute(["WORD","CHAPTER","VERSE"].includes(e.tagName) ? "addr" : "from")
            }
            to = e.getAttribute(["WORD","CHAPTER","VERSE"].includes(e.tagName) ? "addr" : "to")
        }
        if (from && to) {
            element.setAttribute("from", from);
            element.setAttribute("to", to);
            element.setAttribute("addr", `${from}–${to}`)
        }
        eObj = elementsGenerator.next();
    }
    return
}

function updateDomMainIds(topElement) {
    let elements = domCollectElements(topElement, ["chapter","verse","word"]);
    let elementsGenerator = elements.values();
    let eObj = elementsGenerator.next();
    let [chapter,verse,wordnum] = findChapterVerseWordnum(topElement);
    while(!eObj.done) {
        let element = eObj.value
        if (element && element.tagName === "CHAPTER") {
            chapter = parseInt(element.innerText)
            verse = 1
            wordnum = 1
        }
        if (element && element.tagName === "VERSE") {
            verse = parseInt(element.innerText)
            wordnum = 1
        }
        if (chapter && verse && wordnum) {
            element.setAttribute("addr", `${chapter}:${verse}.${wordnum}`)
        }
        if (element && element.tagName === "WORD") {
            wordnum = wordnum + 1
        }
        eObj = elementsGenerator.next();
    }
    return
}

function findChapterVerseWordnum(element) {
    let from = element.getAttribute("from");
    if (from) {
        return rangesParseChapterVerseWord(from, undefined, undefined, 0);
    }
    let addr = element.getAttribute("addr");
    if (addr) {
        return rangesParseChapterVerseWord(addr, undefined, undefined, 0);
    }
    return [undefined, undefined, 0]
}

const TRANSLITERATIONS = [
    ["Ύο","Uo"],
    ["Αυ","Au"],
    ["Αύ","Au"],
    ["Αἱ","Hai"],
    ["Αἳ","Hai"],
    ["Αἵ","Hai"],
    ["Αἷ","Hai"],
    ["Αὐ","Au"],
    ["Αὑ","Hau"],
    ["Αὒ","Au"],
    ["Αὓ","Hau"],
    ["Αὔ","Au"],
    ["Αὕ","Hau"],
    ["Αὖ","Au"],
    ["Αὗ","Hau"],
    ["Αὺ","Au"],
    ["Αύ","Au"],
    ["Αῦ","Au"],
    ["Ευ","Eu"],
    ["Εύ","Eu"],
    ["Εἱ","Hei"],
    ["Εἳ","Hei"],
    ["Εἷ","Hei"],
    ["Εὐ","Eu"],
    ["Εὒ","Eu"],
    ["Εὓ","Heu"],
    ["Εὔ","Eu"],
    ["Εὕ","Heu"],
    ["Εὖ","Eu"],
    ["Εὺ","Eu"],
    ["Εύ","Eu"],
    ["Εῦ","Eu"],
    ["Οἱ","Hoi"],
    ["Ου","Ou"],
    ["Ού","Ou"],
    ["Οὐ","Ou"],
    ["Οὑ","Hou"],
    ["Οὒ","Ou"],
    ["Οὓ","Hou"],
    ["Οὔ","Ou"],
    ["Οὕ","Hou"],
    ["Οὖ","Ou"],
    ["Οὗ","Hou"],
    ["Οὺ","Ou"],
    ["Ού","Ou"],
    ["Οῦ","Ou"],
    ["Υί","Ui"],
    ["Υι","Ui"],
    ["Υἰ","Ui"],
    ["Υἱ","Hui"],
    ["Υἲ","Ui"],
    ["Υἳ","Hui"],
    ["Υἴ","Ui"],
    ["Υἵ","Hui"],
    ["Υἶ","Ui"],
    ["Υἷ","Hui"],
    ["Υὶ","Ui"],
    ["Υί","Ui"],
    ["Υῖ","Ui"],
    ["αυ","au"],
    ["αύ","au"],
    ["αἱ","hai"],
    ["αἳ","hai"],
    ["αἵ","hai"],
    ["αἷ","hai"],
    ["αὐ","au"],
    ["αὑ","hau"],
    ["αὒ","au"],
    ["αὓ","hau"],
    ["αὔ","au"],
    ["αὕ","hau"],
    ["αὖ","au"],
    ["αὗ","hau"],
    ["αὺ","au"],
    ["αύ","au"],
    ["αῦ","au"],
    ["ευ","eu"],
    ["εύ","eu"],
    ["εἱ","hei"],
    ["εἳ","hei"],
    ["εἷ","hei"],
    ["εὐ","eu"],
    ["εὒ","eu"],
    ["εὓ","heu"],
    ["εὔ","eu"],
    ["εὕ","heu"],
    ["εὖ","eu"],
    ["εὺ","eu"],
    ["εύ","eu"],
    ["εῦ","eu"],
    ["οἱ","hoi"],
    ["ου","ou"],
    ["ού","ou"],
    ["οὐ","ou"],
    ["οὑ","hou"],
    ["οὒ","ou"],
    ["οὓ","hou"],
    ["οὔ","ou"],
    ["οὕ","hou"],
    ["οὖ","ou"],
    ["οὗ","hou"],
    ["οὺ","ou"],
    ["ού","ou"],
    ["οῦ","ou"],
    ["υί","ui"],
    ["υι","ui"],
    ["υἰ","ui"],
    ["υἱ","hui"],
    ["υἲ","ui"],
    ["υἳ","hui"],
    ["υἴ","ui"],
    ["υἵ","hui"],
    ["υἶ","ui"],
    ["υἷ","hui"],
    ["υὶ","ui"],
    ["υί","ui"],
    ["υῖ","ui"],
    ["ύο","uo"],
    ["ύο","uo"],
    ["Ύο","Uo"],
    ["Ά","A"],
    ["Άͅ","Aᵢ"],
    ["Έ","E"],
    ["Ή","Ē"],
    ["Ήͅ","Ēᵢ"],
    ["Ί","I"],
    ["Ό","O"],
    ["Ύ","Y"],
    ["Ώ","Ō"],
    ["Ώͅ","Ōᵢ"],
    ["ΐ","i"],
    ["Α","A"],
    ["Α͂","A"],
    ["ᾼ͂","Aᵢ"],
    ["Β","B"],
    ["Γ","G"],
    ["Δ","D"],
    ["Ε","E"],
    ["Ζ","Z"],
    ["Η","Ē"],
    ["Η͂","Ē"],
    ["ῌ͂","Ēᵢ"],
    ["Θ","Th"],
    ["Ι","I"],
    ["Ϊ́","I"],
    ["Ϊ́","I"],
    ["Ι͂","I"],
    ["Κ","K"],
    ["Λ","L"],
    ["Μ","M"],
    ["Ν","N"],
    ["Ξ","X"],
    ["Ο","O"],
    ["Π","P"],
    ["Ρ","R"],
    ["Ρ̓","R"],
    ["Σ","S"],
    ["Σ","S"],
    ["Τ","T"],
    ["Υ","Y"],
    ["Ϋ̀","Y"],
    ["Υ̓","Y"],
    ["Υ̓̀","Y"],
    ["Υ̓́","Y"],
    ["Υ̓͂","Y"],
    ["Υ͂","Y"],
    ["Φ","Ph"],
    ["Χ","Ch"],
    ["Ψ","Ps"],
    ["Ω","Ō"],
    ["Ω͂","Ō"],
    ["ῼ͂","Ōᵢ"],
    ["Ϊ","I"],
    ["Ϋ","Y"],
    ["ά","a"],
    ["έ","e"],
    ["ή","ē"],
    ["ί","i"],
    ["α","a"],
    ["β","b"],
    ["γ","g"],
    ["δ","d"],
    ["ε","e"],
    ["ζ","z"],
    ["η","ē"],
    ["θ","th"],
    ["ι","i"],
    ["κ","k"],
    ["λ","l"],
    ["μ","m"],
    ["ν","n"],
    ["ξ","x"],
    ["ο","o"],
    ["π","p"],
    ["ρ","r"],
    ["ς","s"],
    ["σ","s"],
    ["τ","t"],
    ["υ","y"],
    ["φ","ph"],
    ["χ","ch"],
    ["ψ","ps"],
    ["ω","ō"],
    ["ϊ","i"],
    ["ϋ","y"],
    ["ό","o"],
    ["ύ","y"],
    ["ώ","ō"],
    ["ἀ","a"],
    ["ἁ","ha"],
    ["ἂ","a"],
    ["ἃ","ha"],
    ["ἄ","a"],
    ["ἅ","ha"],
    ["ἆ","a"],
    ["ἇ","ha"],
    ["Ἀ","A"],
    ["Ἁ","Ha"],
    ["Ἂ","A"],
    ["Ἃ","Ha"],
    ["Ἄ","A"],
    ["Ἅ","Ha"],
    ["Ἆ","A"],
    ["Ἇ","Ha"],
    ["ἐ","e"],
    ["ἑ","he"],
    ["ἒ","e"],
    ["ἓ","he"],
    ["ἔ","e"],
    ["ἕ","he"],
    ["Ἐ","E"],
    ["Ἑ","He"],
    ["Ἒ","E"],
    ["Ἓ","He"],
    ["Ἔ","E"],
    ["Ἕ","He"],
    ["ἠ","ē"],
    ["ἡ","hē"],
    ["ἢ","ē"],
    ["ἣ","hē"],
    ["ἤ","ē"],
    ["ἥ","hē"],
    ["ἦ","ē"],
    ["ἧ","hē"],
    ["Ἠ","Ē"],
    ["Ἡ","Hē"],
    ["Ἢ","Ē"],
    ["Ἣ","Hē"],
    ["Ἤ","Ē"],
    ["Ἥ","Hē"],
    ["Ἦ","Ē"],
    ["Ἧ","Hē"],
    ["ἰ","i"],
    ["ἱ","hi"],
    ["ἲ","i"],
    ["ἳ","hi"],
    ["ἴ","i"],
    ["ἵ","hi"],
    ["ἶ","i"],
    ["ἷ","hi"],
    ["Ἰ","I"],
    ["Ἱ","Hi"],
    ["Ἲ","I"],
    ["Ἳ","Hi"],
    ["Ἴ","I"],
    ["Ἵ","Hi"],
    ["Ἶ","I"],
    ["Ἷ","Hi"],
    ["ὀ","o"],
    ["ὁ","ho"],
    ["ὂ","o"],
    ["ὃ","ho"],
    ["ὄ","o"],
    ["ὅ","ho"],
    ["Ὀ","O"],
    ["Ὁ","Ho"],
    ["Ὂ","O"],
    ["Ὃ","Ho"],
    ["Ὄ","O"],
    ["Ὅ","Ho"],
    ["ὐ","y"],
    ["ὑ","hy"],
    ["ὒ","y"],
    ["ὓ","hy"],
    ["ὔ","y"],
    ["ὕ","hy"],
    ["ὖ","y"],
    ["ὗ","hy"],
    ["Ὑ","Hy"],
    ["Ὓ","Hy"],
    ["Ὕ","Hy"],
    ["Ὗ","Hy"],
    ["ὠ","ō"],
    ["ὡ","hō"],
    ["ὢ","ō"],
    ["ὣ","hō"],
    ["ὤ","ō"],
    ["ὥ","hō"],
    ["ὦ","ō"],
    ["ὧ","hō"],
    ["Ὠ","Ō"],
    ["Ὡ","Hō"],
    ["Ὢ","Ō"],
    ["Ὣ","Hō"],
    ["Ὤ","Ō"],
    ["Ὥ","Hō"],
    ["Ὦ","Ō"],
    ["Ὧ","Hō"],
    ["ὰ","a"],
    ["ά","a"],
    ["ὲ","e"],
    ["έ","e"],
    ["ὴ","ē"],
    ["ή","ē"],
    ["ὶ","i"],
    ["ί","i"],
    ["ὸ","o"],
    ["ό","o"],
    ["ὺ","y"],
    ["ύ","y"],
    ["ὼ","ō"],
    ["ώ","ō"],
    ["ᾀ","aᵢ"],
    ["ᾁ","haᵢ"],
    ["ᾂ","aᵢ"],
    ["ᾃ","haᵢ"],
    ["ᾄ","aᵢ"],
    ["ᾅ","haᵢ"],
    ["ᾆ","aᵢ"],
    ["ᾇ","haᵢ"],
    ["ᾈ","Aᵢ"],
    ["ᾉ","Haᵢ"],
    ["ᾊ","Aᵢ"],
    ["ᾋ","Haᵢ"],
    ["ᾌ","Aᵢ"],
    ["ᾍ","Haᵢ"],
    ["ᾎ","Aᵢ"],
    ["ᾏ","Haᵢ"],
    ["ᾐ","ēᵢ"],
    ["ᾑ","hēᵢ"],
    ["ᾒ","ēᵢ"],
    ["ᾓ","hēᵢ"],
    ["ᾔ","ēᵢ"],
    ["ᾕ","hēᵢ"],
    ["ᾖ","ēᵢ"],
    ["ᾗ","hēᵢ"],
    ["ᾘ","Ēᵢ"],
    ["ᾙ","Hēᵢ"],
    ["ᾚ","Ēᵢ"],
    ["ᾛ","Hēᵢ"],
    ["ᾜ","Ēᵢ"],
    ["ᾝ","Hēᵢ"],
    ["ᾞ","Ēᵢ"],
    ["ᾟ","Hēᵢ"],
    ["ᾠ","ōᵢ"],
    ["ᾡ","hōᵢ"],
    ["ᾢ","ōᵢ"],
    ["ᾣ","hōᵢ"],
    ["ᾤ","ōᵢ"],
    ["ᾥ","hōᵢ"],
    ["ᾦ","ōᵢ"],
    ["ᾧ","hōᵢ"],
    ["ᾨ","Ōᵢ"],
    ["ᾩ","Hōᵢ"],
    ["ᾪ","Ōᵢ"],
    ["ᾫ","Hōᵢ"],
    ["ᾬ","Ōᵢ"],
    ["ᾭ","Hōᵢ"],
    ["ᾮ","Ōᵢ"],
    ["ᾯ","Hōᵢ"],
    ["ᾲ","aᵢ"],
    ["ᾳ","aᵢ"],
    ["ᾴ","aᵢ"],
    ["ᾶ","a"],
    ["ᾷ","aᵢ"],
    ["Ὰ","A"],
    ["Ὰͅ","Aᵢ"],
    ["Ά","A"],
    ["ᾼ","Aᵢ"],
    ["ῂ","ēᵢ"],
    ["ῃ","ēᵢ"],
    ["ῄ","ēᵢ"],
    ["ῆ","ē"],
    ["ῇ","ēᵢ"],
    ["Ὲ","E"],
    ["Έ","E"],
    ["Ὴ","Ē"],
    ["Ὴͅ","Ēᵢ"],
    ["Ή","Ē"],
    ["ῌ","Ēᵢ"],
    ["ΐ","i"],
    ["ῖ","i"],
    ["Ὶ","I"],
    ["Ί","I"],
    ["ῢ","y"],
    ["ῤ","r"],
    ["ῥ","hr"],
    ["ῦ","y"],
    ["Ὺ","Y"],
    ["Ύ","Y"],
    ["Ῥ","Hr"],
    ["ῲ","ōᵢ"],
    ["ῳ","ōᵢ"],
    ["ῴ","ōᵢ"],
    ["ῶ","ō"],
    ["ῷ","ōᵢ"],
    ["Ὸ","O"],
    ["Ό","O"],
    ["Ὼ","Ō"],
    ["Ὼͅ","Ōᵢ"],
    ["Ώ","Ō"],
    ["ῼ","Ōᵢ"]]

function transliterate(inputString) {
    let input = inputString;
    let output = "";
    whileLoop: while (input) {
        for (const pattern of TRANSLITERATIONS) {
            if (input.startsWith(pattern[0])) {
                output = output + pattern[1];
                input = input.substring(pattern[0].length);
                continue whileLoop;
            }
        }
        output = output + input.charAt(0);
        input = input.substring(1);
    }
    return output;
}

function updateDomTransliteration(element) {
    removeTransliteration(element);
    addTransliteration(element);
}

function removeTransliteration(element) {
    for (const word of element.getElementsByTagName("word")) {
        for (const tl of word.getElementsByTagName("tl")) {
            word.removeChild(tl);
        }
    };
}

function addTransliteration(element) {
    for (const word of element.getElementsByTagName("word")) {
        for (const gr of word.getElementsByTagName("gr")) {
            const tlText = transliterate(gr.textContent);
            const tl = createElementWithText("tl", tlText);
            word.appendChild(tl);
        }
    };
}

function createElementWithText(tag, text) {
    let element = document.createElement(tag);
    let textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

function makeVisibleAll() {
    updateDomMainVisibility("")
}

function makeVisibleSubset() {
    let subset = app.rangesInput.value ? app.rangesInput.value : getSelectionAddr();
    if (app.rangesInput.value) {
        inputRingAdd(app.rangesInput.value);
    }
    updateDomMainVisibility(subset);
}

function addSelectionToInput() {
    let addr = getSelectionAddr();
    if (addr) {
        if (!app.rangesInput.value) {
            app.rangesInput.value = `${addr}`;
        } else {
            app.rangesInput.value = `${app.rangesInput.value} ${addr}`;
        }
    }
}

function addSelectionBegToInput() {
    let addr = getSelectionAddr();
    if (addr) {
        let addrB = addrLeft(addr);
        if (!app.rangesInput.value) {
            app.rangesInput.value = `${addrB}–`;
        } else {
            if (!app.rangesInput.value.endsWith("–")) {
                app.rangesInput.value = `${app.rangesInput.value} ${addrB}–`;
            }
        }
    }
}

function addSelectionEndToInput() {
    let addr = getSelectionAddr();
    if (addr) {
        let addrE = addrRight(addr);
        if (app.rangesInput.value && app.rangesInput.value.endsWith("–")) {
            app.rangesInput.value = `${app.rangesInput.value}${addrE}`;
        }
    }
}

function addrLeft(addr) {
    let index = addr.indexOf("–");
    if (index >= 0) {
        return addr.slice(0, index);
    } else {
        return addr;
    }
}

function addrRight(addr) {
    let index = addr.indexOf("–");
    if (index >= 0) {
        return addr.slice(index + 1);
    } else {
        return addr;
    }
}

function getSelectionAddr() {
    let selection = getSelection();
    if (selection) {
        return selection.getAttribute("addr")
    } else {
        return "";
    }
}

function populateForLang(lang) {
}

function hideAux() {
    app.body.classList.remove("showaux");
    app.aux.replaceChildren()
}

function attrib2css(attrib) {
    switch (attrib) {
    case "colorfa":   return "color: #8000ff;"
    case "colorfb":   return "color: #0000ff;"
    case "colorfc":   return "color: #00eeee;"
    case "colorfd":   return "color: #00afff;"
    case "colorfe":   return "color: #000080;"
    case "colorff":   return "color: #009999;"
    case "colorfg":   return "color: #008000;"
    case "colorfh":   return "color: #00ee00;"
    case "colorfi":   return "color: #808000;"
    case "colorfj":   return "color: #eeee00;"
    case "colorfk":   return "color: #ffbc00;"
    case "colorfl":   return "color: #800000;"
    case "colorfm":   return "color: #ff00ff;"
    case "colorfn":   return "color: #ff8080;"
    case "colorfo":   return "color: #ff8000;"
    case "colorfp":   return "color: #ff80ff;"
    case "colorfq":   return "color: #808080;"
    case "colorfr":   return "color: #ff0000;"
    case "colorba":   return "background-color: b080ff;"
    case "colorbb":   return "background-color: 8080ff;"
    case "colorbc":   return "background-color: 80ffff;"
    case "colorbd":   return "background-color: 80bfff;"
    case "colorbe":   return "background-color: 6060b0;"
    case "colorbf":   return "background-color: 609999;"
    case "colorbg":   return "background-color: 80ff80;"
    case "colorbh":   return "background-color: 40ee40;"
    case "colorbi":   return "background-color: a0a060;"
    case "colorbj":   return "background-color: ffff80;"
    case "colorbk":   return "background-color: ffbc40;"
    case "colorbl":   return "background-color: 800000;"
    case "colorbm":   return "background-color: ff80ff;"
    case "colorbn":   return "background-color: ff8080;"
    case "colorbo":   return "background-color: ff8000;"
    case "colorbp":   return "background-color: ffa0ff;"
    case "colorbq":   return "background-color: 808080;"
    case "colorbr":   return "background-color: ff9090;"
    case "colorbs":   return "background-color: c0c0c0;"
    case "colorbt":   return "background-color: e0e0ff;"
    case "colorbu":   return "background-color: e0ffff;"
    case "colorbv":   return "background-color: e0ffe0;"
    case "colorbw":   return "background-color: ffe0a0;"
    case "colorbx":   return "background-color: ffffe0;"
    case "colorby":   return "background-color: ffe0ff;"
    case "colorbz":   return "background-color: ffe0e0;"
    case "bold":      return "font-weight: bold;"
    case "italic":    return "font-style: italic;"
    case "smallcaps": return "font-variant-caps: small-caps;"
    default: return ""
    }
}

function attribs2css(attrib) {
    return attrib.split(" ").map(attrib2css).join("");
}

function textAsHtml(element, level, lang) {
    let langUpper = lang.toUpperCase();
    let text = "";
    let pTags = new Set(["BOOK", "SECTION", "SUBSECTION", "SEQUENCE", "SUBSEQUENCE", "PASSAGE"]);
    visitElements2(element, (elem, before) => {
        if (before && pTags.has(elem.tagName)) {
            text += `<p>`;
        } else if (before && elem.getAttribute(level)) {
            text += `<span style='`+attribs2css(elem.getAttribute(level))+`'>`;
        } else if (!before && elem.tagName === "VERSE") {
            text += elem.textContent + " ";
        } else if (!before && elem.tagName === "CHAPTER") {
            text += elem.textContent;
        } else if (!before && elem.tagName === langUpper) {
            text += elem.textContent + " ";
        } else if (!before && elem.getAttribute(level)) {
            text += `</span>`;
        } else if (!before && pTags.has(elem.tagName)) {
            text += `</p>`;
        }
    });
    return text;
}

function structure(element, toLevel, hideFlag) {
    if (element && isMain(element) && element.childElementCount > 0) {
        element = app.main.children[0];
    }
    if (element) {
        let table = document.createElement("table");
        let titleNode = createElementWithText("p", elementTitleWithAddr(element));
        let levels = Array.from(app.levels);
        let fromLevel = element.tagName.toLowerCase();
        let index = levels.indexOf(fromLevel);
        levels = levels.slice(index+1);
        index = levels.indexOf(toLevel);
        if (index >= 0) {
            levels = levels.slice(0,index+1);
        } else {
            levels = levels.slice(0,1);
        }
        let elements = domCollectElements(element, levels);
        let nodes = [];
        for (let elem of elements) {
            nodes.push(...elementStructure(elem, hideFlag));
        }
        table.replaceChildren(...nodes);
        app.aux.replaceChildren(titleNode, table);
    }
}

function elementStructure(element, hideFlag) {
    let nodes = [];
    let tr = document.createElement("tr");
    let levelIndentation = 2*(12 - levelNumber(element.tagName));
    let style = `position:relative; left: ${levelIndentation}em`;
    tr.setAttribute("style", style);
    tr.appendChild(createElementWithText("td", elementTitle(element)));
    tr.appendChild(createElementWithText("td", addr2(element)));
    tr.addEventListener("click", () => {
        if (hideFlag) {
            removeMode();
        }
        withFocus(_ => element)
        updateDomMainVisibility(getSelectionAddr())
        selectLevel(element.tagName.toLowerCase())
    });
    nodes.push(tr);
    return nodes;
}

function elementTitle(element, idFun = elementIdentifier) {
    let lang = infoLang();
    let part1 = elementLevelNameAndId(element, idFun);
    let title = element.getAttribute(lang);
    if (title) {
        return `${part1}: ${title}`;
    } else {
        return part1;
    }
}

function elementTitleWithAddr(element) {
    let lang = infoLang();
    let part1 = elementLevelNameAndId(element);
    let title = element.getAttribute(lang);
    let addr = addr2(element)
    if (title) {
        return `${part1}: ${title} (${addr})`;
    } else {
        return `${part1}: ${addr}`;
    }
}

function infoLang() {
    return app.langSelect.value === "gr" ? "en" : app.langSelect.value;
}

function elementLevelName(element) {
    let lang = infoLang();
    let langLevelNames = app.levelNames[lang];
    let levelName = langLevelNames[element.tagName];
    return levelName;
}

function elementLevelNameAndId(element, idFun = elementIdentifier) {
    let levelName = elementLevelName(element);
    let identifier = idFun(element);
    if (identifier) {
        return `${levelName} ${identifier}`;
    } else {
        return levelName;
    }
}

function elementIdentifier(element) {
    switch(element.tagName) {
    case "SECTION": return String.fromCharCode(65+countPrevSiblings(element));
    case "SUBSECTION":
        if (element.childElementCount === 1) {
            return elementIdentifier(element.firstElementChild);
        } else if (element.childElementCount > 1) {
            let firstId = elementIdentifier(element.firstElementChild);
            let lastId = elementIdentifier(element.lastElementChild);
            return `${firstId}–${lastId}`;
        }
        return;
    case "SEQUENCE":
        let section = findTagUpwards(element, "section");
        if (section) {
            let sectionId = elementIdentifier(section);
            let sequences = domCollectElements(section, ["sequence"]);
            let index = sequences.findIndex(seq => seq === element);
            if (index >= 0) {
                return `${sectionId}${index + 1}`;
            }
        }
        return;
    case "SUBSEQUENCE":
        let sequence = findTagUpwards(element, "sequence");
        if (sequence) {
            let sequenceId = elementIdentifier(sequence);
            let subsequences = domCollectElements(sequence, ["subsequence"]);
            let index = subsequences.findIndex(sseq => sseq === element);
            if (index >= 0) {
                let letter = String.fromCharCode(97+index);
                return `${sequenceId}${letter}`;
            }
        }
        return;
    default:
        return addr2(element);
    }
}

function countPrevSiblings(element) {
    if (element.previousElementSibling) {
        return 1 + countPrevSiblings(element.previousElementSibling);
    } else {
        return 0
    }
}

function describeStructure(elements, levelFunc) {
    let selections = elements.map(selection => {
        let lang = infoLang();
        if (levelFunc) {
            let asterisks = levelFunc(selection.tagName);
            let levelName = elementLevelName(selection);
            let title = selection.getAttribute(lang) ? ": " + selection.getAttribute(lang) : ""
            let addr = addr2(selection)
            let identifier = selection.getAttribute("identifier");
            let prefix = identifier ? ` ${identifier}` : ` ${addr}`;
            return `${asterisks} ${levelName}${prefix}${title} • ${addr}`;
        } else {
            return `${selection.getAttribute(lang) || ""}\t${addr2(selection, "", "")}`;
        }
    });
    return selections.join("\n")
}

function titlesAndStruct(focus) {
    let text = ""
    text += elementTitle(focus, elementIdentifier) + "\n";
    text += elementTitle(focus, addr2) + "\n";
    text += elementTitleWithAddr(focus);
    text += "\n\n";
    text += descrStructure(focus);
    text += "\n\n";
    return text;
}

function addr1(element) {
    let addr = element.getAttribute("addr");
    if (addr) {
        return addr.replace(/[.].*/, "");
    } else {
        return "";
    }
}

function addrVerse(element) {
    return addr1(element).replace(/[^:]*:/, "");
}

function addr2(element, prefix="", suffix="") {
    let addr = element.getAttribute("addr");
    if (addr) {
        return prefix + addr.replaceAll(/[.][0-9]+/gu,"") + suffix;
    } else {
        return "";
    }
}

function descrStructure(element) {
    let text = "";
    let childrenCount = element.children.length;
    if (childrenCount > 0) {
        let childLevel = element.children[0].tagName.toLowerCase();
        text += `The ${element.tagName.toLowerCase()}${addr2(element, " ", "")} consists of ${childrenCount} ${childLevel}s.\n\n`
        text += describeStructure(Array.from(element.children));
    }
    return text;
}

function describe() {
    let focus = getFocus();
    if (isMain(focus) || levelNumber(focus.tagName) >= 7) {
        app.textArea.value = titlesAndStruct(focus);
    } else {
        let level = app.levelSelect.value;
        app.textArea.value = descrTextMarkers(focus, level);
    }
}


function descrTextMarkers(element, level) {
    let text = "";
    let levelAttrValue = element.getAttribute(level);
    if (levelAttrValue) {
        text += levelAttrValue + "\n";
        let levelElement = findTagUpwards(element, level);
        if (levelElement) {
            let query = levelAttrValue.split(" ").map(value => `[${level}*="${value}"]`).join("")
            let elements = Array.from(levelElement.querySelectorAll(query));
            let consolidatedWords = consolidateWordSequences(levelElement, elements);
            text += listElements(consolidatedWords);
            text += listAddresses(consolidatedWords, addrVerse);
            text += listAddresses(consolidatedWords, addr1);
            text += descrElements(consolidatedWords, addrVerse, false);
            text += descrElements(consolidatedWords, addrVerse, true);
            text += descrElements(consolidatedWords, addr1, false);
            text += descrElements(consolidatedWords, addr1, true);
        }
        return text;
    }
}

function consolidateWordSequences(topElement, elements) {
    let addresses = new Set();
    let elemWords;
    for (let elem of elements) {
        if (elem.tagName === "WORD") {
            elemWords = [ elem ];
        } else {
            elemWords = elem.querySelectorAll("word");
        }
        for (let word of elemWords) {
            let addr = word.getAttribute("addr");
            if (addr) {
                addresses.add(addr);
            }
        }
    }
    let topWords = topElement.querySelectorAll("word");
    let results = [];
    let result = undefined;
    for (let word of topWords) {
        let addr = word.getAttribute("addr");
        if (addr) {
            if (addresses.has(addr)) {
                if (result) {
                    result.push(word);
                } else {
                    result = [word];
                }
            } else {
                if (result) {
                    results.push(result);
                    result = undefined;
                }
            }
        }
    }
    if (result) {
        results.push(result);
    }
    return results;
}

function listAddresses(wordGroups, addrFun) {
    let text = "";
    let addresses = [];
    let addressesSet = new Set();
    for (let words of wordGroups) {
        let address = addrFun(words[0]);
        if (!addressesSet.has(address)) {
            addressesSet.add(address);
            addresses.push(address);
        }
    }
    text += addresses.join(", ");
    text += "\n";
    return text;
}

function descrElements(wordGroups, addrFun, includeTr) {
    let text = "";
    for (let j = 0; j < wordGroups.length; j++) {
        let words = wordGroups[j];
        if (j === 0) {
        } else if (j < wordGroups.length - 1) {
            text += ", ";
        } else {
            text += " and ";
        }
        text += quoteText(words, addrFun, includeTr);
    }
    text += `\n`
    return text;
}

function quoteText(words, addrFun, includeTr) {
    let text = "";
    text += "“";
    text += collectText(words, "en");
    text += "” (";
    text += addrFun(words[0]);
    if (includeTr) {
        text += ", ";
        text += collectText(words, "tl");
    }
    text += ")";
    return text;
}

function collectText(elements, lang) {
    return Array.from(elements).map(element => domCollectElements(element, [lang]).map(e => e.textContent).join(" ")).join(" ");
}

function listElements(wordGroups, marker) {
    let text = "";
    let langs = ["gr", "tl", "en", "pl"];
    let lengths = []
    for (let g = 0; g < langs.length; g++) {
        for (let j = 0; j < wordGroups.length; j++) {
            let txt = collectText(wordGroups[j], langs[g]);
            lengths[g] = Math.max((lengths[g] || 0), txt.length);
        }
    }
    for (let j = 0; j < wordGroups.length; j++) {
        let group = wordGroups[j];
        text += addr1(group[0]).padEnd(5);
        for (let g = 0; g < langs.length; g++) {
            text += " • ";
            text += collectText(group, langs[g]).padEnd(lengths[g]);
        }
        text += "\n";
    }
    return text;
}

function eraseInput() {
    app.rangesInput.value = ""
}

function eraseAndForgetInput() {
    app.state.inputRing = app.state.inputRing.filter(v => v !== app.rangesInput.value)
    app.rangesInput.value = ""
    setRecoverInputButtonTitle()    
}

function inputRingAdd(value) {
    app.state.inputRing = app.state.inputRing.filter(v => v !== value)
    app.state.inputRing.unshift(value)
    app.state.inputRing = app.state.inputRing.slice(0,8)
    setRecoverInputButtonTitle()    
}

function setRecoverInputButtonTitle() {
    app.recoverInputButton.title = app.state.inputRing.join("\n")
}

function recoverInput() {
    if (app.state.inputRing.length > 0) {
        if (app.rangesInput.value && app.rangesInput.value === app.state.inputRing[0]) {
            app.state.inputRing.push(app.state.inputRing.shift())
        }
        app.rangesInput.value = app.state.inputRing[0];
        setRecoverInputButtonTitle()
    }
}

function addStrongToInput() {
    let selection = getSelection();
    if (selection && selection.tagName === "WORD") {
        let sn = selection.getAttribute("sn");
        if (!app.rangesInput.value) {
            app.rangesInput.value = sn;
        } else {
            app.rangesInput.value = `${app.rangesInput.value} ${sn}`
        }
    }
}


function unselect() {
    let selection = getSelection()
    if (selection) {
        selection.id = "";
        app.main.removeAttribute("selectionlevel");
    }
    updateViewForElement(app.main);
}

function withSelection3(fSelection, fBefore, fAfter) {
    let selectionBefore = fSelection();
    if (selectionBefore) {
        let selectionAfter = fBefore(selectionBefore);
        if (selectionAfter) {
            if (selectionBefore && selectionBefore.id === "selection") {
                selectionBefore.id = "";
                app.main.removeAttribute("selectionlevel");
            }
            if (selectionAfter.id === "") {
                selectionAfter.id = "selection";
                app.main.setAttribute("selectionlevel", selectionAfter.tagName.toLowerCase());
            }
        }
        let selection = selectionAfter ? selectionAfter : selectionBefore;
        if (fAfter) {
            fAfter(selection);
        }
        return selection
    }
}

function withFocus(fBefore) {
    return withSelection3(getFocus, fBefore, updateViewForElement);
}

function withSelection(fBefore) {
    return withSelection3(getSelection, fBefore, updateViewForElement);
}

function updateTextArea(element) {
    if (app.textArea) {
        app.textArea.value = cleanHTML(isMain(element) ? element.innerHTML : element.outerHTML);
    }
}

function cleanHTML(text) {
    return text.
        replaceAll(" class=\"\"","").
        replaceAll(" id=\"\"","").
        replaceAll(" id=\"selection\"","").
        replaceAll(/ hover=\"[^"]*\"/g,"").
        replaceAll(/ addr=\"[^"]*\"/g,"").
        replaceAll(/ from=\"[^"]*\"/g,"").
        replaceAll(/ to=\"[^"]*\"/g,"").
        replaceAll(/ visible=\"[^"]*\"/g,"").
        replaceAll(/<tl>[^<]*<\/tl>/g,"").
        replaceAll(/\n *\n/g,"\n");
}

function getSelection() {
    return document.getElementById("selection");
}

function getFocus() {
    let selection = getSelection();
    return selection ? selection : app.main;
}

function isMain(element) {
    return element.id == "main";
}

function updateStatusBar(focus) {
    if (app.statusBar) {
        if (focus) {
            let label = document.createElement("label");
            let texts = focus.getAttributeNames().filter(attrRank).sort((x,y) => attrRank(y) - attrRank(x)).map(a => `${a}="${focus.getAttribute(a)}"`)
            texts.push(focus.className)
            let labelTextNode = document.createTextNode(texts.join(" "));
            label.appendChild(labelTextNode);
            app.statusBar.replaceChildren(label);
            updateStatusBarTags(focus);
        } else {
            app.statusBar.innerHTML = "";
        }
    }
}

function attrRank(attr) {
    switch(attr) {
    case "mode": return 22
    case "lockerm": return 21
    case "locker": return 20
    case "addr": return 19
    case "sn": return 18
    case "rmac": return 17
    case "book": return 16
    case "section": return 15
    case "subsection": return 14
    case "sequence": return 13
    case "subsequence": return 12
    case "passage": return 11
    case "part": return 10
    case "subpart": return 9
    case "piece": return 8
    case "segment": return 7
    case "member": return 6
    case "extremeterm": return 5
    case "initialterm": return 4
    case "centralterm": return 3
    case "finalterm": return 2
    case "medianterm": return 1
    default: return undefined
    }
}

function updateStatusBarTags(elem) {
    if (elem) {
        if (elem.tagName === "MAIN") return;
        let label = document.createElement("label");
        let labelTextNode = document.createTextNode("<" + elem.tagName.toLowerCase() + ">");
        label.appendChild(labelTextNode);
        label.addEventListener("mouseenter", (e) => {
            elem.setAttribute("hover","");
        });
        label.addEventListener("mouseout", (e) => {
            elem.removeAttribute("hover");
        });
        label.addEventListener("click", (e) => {
            withFocus(_ => elem);
        });
        app.statusBar.insertBefore(label, app.statusBar.firstChild);
        updateStatusBarTags(elem.parentElement);
    }
}

function moveSelectionToTop() {
    withSelection(selection => {
        while (selection.parentElement && !isThisTopElement(selection)) {
            selection = selection.parentElement
        }
        return selection;
    });
}

function moveSelectionRight(tagsFunction) {
    moveSelectionHorizontally(findNext, tagsFunction);
}

function moveSelectionLeft(tagsFunction) {
    moveSelectionHorizontally(findPrev, tagsFunction);
}

function moveSelectionHorizontally(findFunction, tagsFunction) {
    withSelection(selection => {
        return findPrevNextElement(selection, findFunction, tagsFunction);
    });
}

function findPrevNextElement(element, findFunction, tagsFunction) {
    let tags = tagsFunction ? tagsFunction(element) : defaultTagsFunction(element);
    let elements = domCollectElements(app.main, tags);
    return findFunction(elements, element);
}

function selectionLevelBorders() {
    mainFlagAttribute(app.selectionLevelBordersCheckbox, "selectionlevelborders");
}

function defaultTagsFunction(element) {
    return ["CHAPTER","VERSE","WORD"].includes(element.tagName) ? ["CHAPTER","VERSE","WORD"] : [element.tagName];
}

function moveSelectionUp() {
    withSelection(selection => selection.parentElement);
}

function moveSelectionDown() {
    withSelection(selection => {
        if (selection.children && selection.children.length > 0 && levelNumber(selection.children[0].tagName) >= 0) {
            return selection.children[0];
        }
    });
}

function findPrev(values, value) {
    const index = Array.prototype.indexOf.call(values, value);
    if (index > 0) {
        return values[index-1];
    } else {
        return undefined;
    }
}

function findNext(values, value) {
    const index = Array.prototype.indexOf.call(values, value);
    if (index >= 0 && index < values.length - 1) {
        return values[index+1];
    } else {
        return undefined;
    }
}

function storageLoadDocument() {
    if (app.documentsSelect.value) {
        let value = localStorage.getItem("doc:"+app.documentsSelect.value);
        if (value) {
            const obj = JSON.parse(value);
            app.main.innerHTML = obj.html;
            updateDom(app.main);
            if (obj.saveTime) {
                let saveDate = new Date(obj.saveTime);
                app.documentsSelect.title = saveDate.toLocaleString();
            } else {
                app.documentsSelect.removeAttribute("title");
            }
            localStorage.setItem("doc", app.documentsSelect.value);
        }
    } else {
        app.main.innerHTML = "";
        app.textArea.value = "";
        app.textArea.focus();
        localStorage.setItem("doc", null);
        app.documentsSelect.removeAttribute("title");
    }
    unselect();
    storageDocNotModified();
    updateDom(app.main);
}

function storageDocModified() {
    if (app.documentsSelect) {
        if (!app.documentsSelect.disabled) {
            const text = document.createTextNode("*"+app.documentsSelect.value)
            app.documentsSelect.options[app.documentsSelect.options.selectedIndex].replaceChildren(text);
            app.documentsSelect.disabled = true;
        }
    }
}

function storageDocNotModified() {
    const text = document.createTextNode(app.documentsSelect.value)
    app.documentsSelect.options[app.documentsSelect.options.selectedIndex].replaceChildren(text);
    app.documentsSelect.disabled = false;
}

function storageOnDocuments(f) {
    var documentsItem = localStorage.getItem("documents");
    let documentsBefore;
    if (documentsItem) {
        documentsBefore = JSON.parse(documentsItem);
    } else {
        documentsBefore = [];
    }
    let documentsAfter = f(documentsBefore);
    if (documentsAfter) {
        localStorage.setItem("documents", JSON.stringify(documentsAfter));
    }
}

function storagePopulateDocumentsSelect(documentsValues) {
    let values = [""].concat(documentsValues);
    populateSelect(app.documentsSelect, values);
}

function storageRemoveDocument() {
    if (app.documentsSelect.value) {
        let confirmed = confirm("Really remove " + app.documentsSelect.value + "?");
        if (confirmed) {
            localStorage.removeItem("doc:"+app.documentsSelect.value);
            storageOnDocuments(documents => {
                let newDocuments = documents.filter(d => d !== app.documentsSelect.value);
                storagePopulateDocumentsSelect(newDocuments, "");
                return newDocuments;
            });
        }
        storageLoadDocument();
    }
}


function storageSaveDocument() {
    storageSaveHtml(app.main.innerHTML)
}

function storageSaveDocumentAs() {
    storageSaveHtmlAs(app.main.innerHTML, app.documentsSelect.value)
}

function storageSaveHtml(html) {
    if (app.documentsSelect.value) {
        let obj = {}
        obj.html = cleanHTML(html);
        let saveDate = new Date();
        obj.saveTime = saveDate.getTime();
        app.documentsSelect.title = saveDate.toLocaleString();
        let str = JSON.stringify(obj);
        try {
            localStorage.setItem("doc:"+app.documentsSelect.value, str);
        } catch (error) {
            alert(`Unable to save ${error}`);
            return;
        }
        localStorage.setItem("doc", app.documentsSelect.value);
        storageDocNotModified();
    } else {
        storageSaveHtmlAs(html, "");
    }
}

function storageSaveHtmlAs(html, defaultName) {
    let name = prompt("Document name:", defaultName);
    if (name) {
        storageOnDocuments(documents => {
            if (documents.includes(name)) {
                alert("Cannot override an existing document. Choose another name.");
                return;
            }
            documents.push(name);
            documents.sort();
            storagePopulateDocumentsSelect(documents, name);
            app.documentsSelect.value = name
            return documents;
        });
        storageSaveHtml(html);
    }
}

function clickAction(actionKey) {
    if (isMode("lock")) {
        updateLock(locker => actionKey);
    } else {
        withSelection(selection => {
            let action = app.actions[actionKey];
            if (action) {
                action(selection);
            }
        });
    }
}

function clickMarker(marker) {
    if (isMode("lock")) {
        updateLock(locker => updateMarkers(locker, marker, true));
    } else {
        withSelection(selection => updateMarker(selection, marker));
    }
}

function updateMarker(element, marker) {
    onLevelMarkers(element, markers => updateMarkers(markers, marker))
}

function updateMarkers(markers, marker, includeNegativeMarkers) {
    let values;
    if (markers) {
        values = markers.split(" ");
    }
    if (!values) {
        values = []
    }
    values = values.filter(v => v !== "case" && !v.startsWith("punctuation"))
    let wasThere = values.includes(marker);
    for (group of app.markerGroups) {
        if (group.includes(marker)) {
            for (m of group) {
                values = values.filter(v => v !== m)
            }
        }
    }
    if (((marker.startsWith("no") && includeNegativeMarkers) || !marker.startsWith("no")) && !wasThere) {
        values.push(marker)
    }
    let newAttrValue = values.join(" ")
    if (newAttrValue === "") {
        newAttrValue = null;
    }
    return newAttrValue;
}

function onLevelMarkers(element, f) {
    let level = app.levelSelect.value;
    if (element && level) {
        const markersBefore = element.getAttribute(level);
        const markersAfter = f(markersBefore)
        if (markersBefore !== markersAfter) {
            if (markersAfter) {
                element.setAttribute(level, markersAfter);
            } else {
                element.removeAttribute(level);
            }
            storageDocModified();
        }
    }
}

function updateLock(updateFunction) {
    let locker = app.main.getAttribute("locker");
    locker = updateFunction(locker);
    app.main.setAttribute("locker", locker);
    selectButtons(getLockerItems());
    updateStatusBar(app.main);
}

function updateLockWithMarker(marker) {
    let locker = app.main.getAttribute("locker");
    locker = updateMarkers(locker, marker, true);
    app.main.setAttribute("locker", locker);
    selectButtons(getLockerItems());
    updateStatusBar(app.main);
}

function selectButtons(buttons) {
    for (buttonKey in app.buttons) {
        let button = app.buttons[buttonKey];
        if (button) {
            if (buttons.includes(buttonKey)) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }
        }
    }
}

function isMode(mode) {
    return app.main.getAttribute("mode") === mode;
}

function selectMode(mode) {
    removeMode();
    clickMode(mode);
}

function clickMode(mode) {
    let oldMode = removeMode();
    if (mode !== oldMode) {
        let button = app.modeButtons[mode];
        button.classList.add("selected");
        app.main.setAttribute("mode", mode);
    }
    if (isMode("lock")) {
        selectButtons([]);
    } else {
        unlock();
    }
    if (isMode("structuremain")) {
        app.body.classList.add("showaux");
        structure(app.main, "subsequence", true);
    } else if (isMode("structurefocus")) {
        app.body.classList.add("showaux");
        structure(getFocus(), app.levelSelect.value, false);
    } else if (isMode("text")) {
        app.body.classList.add("showaux");
        app.aux.innerHTML = textAsHtml(getFocus(), app.levelSelect.value, app.langSelect.value);
    }
    updateStatusBar(app.main);
}

function removeMode() {
    let oldMode = app.main.getAttribute("mode");
    if (oldMode) {
        let button = app.modeButtons[oldMode];
        button.classList.remove("selected");
        app.main.removeAttribute("mode");
        hideAux();
    }
    return oldMode;
}

function unlock() {
    for (marker of getLockerItems()) {
        let button = app.buttons[marker];
        if (button) {
            button.classList.remove("selected");
        }
    }
    app.main.removeAttribute("locker");
    selectButtons([]);
}

function memorizeLocker() {
    let locker = app.main.getAttribute("locker");
    if (locker) {
        app.main.setAttribute("lockerm", locker);
    } else {
        app.main.removeAttribute("lockerm");
    }
    unlock();
    updateStatusBar(app.main);
}

function replace() {
    let fromMarkers = app.main.getAttribute("lockerm");
    let toMarkers = app.main.getAttribute("locker");
    let modified = false;
    if (fromMarkers && fromMarkers !== toMarkers) {
        let fromMarkersSet = new Set(fromMarkers.split(" "));
        let level = app.levelSelect.value;
        withSelection(selection => {
            forElementAndChildren(selection, elem => {
                let value = elem.getAttribute(level);
                if (value) {
                    let valueSet = new Set(value.split(" "));
                    if (fromMarkersSet.isSubsetOf(valueSet)) {
                        valueSet = valueSet.difference(fromMarkersSet);
                        if (toMarkers) {
                            let toMarkersSet = new Set(toMarkers.split(" "));
                            valueSet = valueSet.union(toMarkersSet);
                        }
                        value = valueSet.values().toArray().join(" ")
                        elem.setAttribute(level, value);
                        modified = true;
                    }
                }
            });
        });
    }
    removeMode();
    unlock();
    if (modified) {
        storageDocModified();
    }
}

function focusCopyDecor(findFunction, clean) {
    const srcViewLevel = app.levelSelect.value
    const docViewLevels = app.levels;
    const destViewLevel = findFunction(docViewLevels, srcViewLevel);
    withSelection(selection => {
        copyDecorators(selection, srcViewLevel, destViewLevel);
        if (clean) {
            cleanDecorators(selection, srcViewLevel);
        }
    });
}

function focusCopyDecorUp() {
    focusCopyDecor(findPrev);
}

function focusCopyDecorDown() {
    focusCopyDecor(findNext);
}

function focusMoveDecorUp() {
    focusCopyDecor(findPrev, true);
}

function focusMoveDecorDown() {
    focusCopyDecor(findNext, true);
}

function cleanSelectionDecorators() {
    const viewLevel = app.levelSelect.value
    withSelection(selection => {
        cleanDecorators(selection, viewLevel);
    });
}

function copyDecorators(selection, srcViewLevel, destViewLevel) {
    let modified = false;
    if (destViewLevel) {
        forElementAndChildren(selection, elem => {
            let value = elem.getAttribute(srcViewLevel);
            let valueBefore = elem.getAttribute(srcViewLevel);
            if (value) {
                elem.setAttribute(destViewLevel, value);
            } else {
                elem.removeAttribute(destViewLevel);
            }
            if (value !== valueBefore) {
                modified = true;
            }
        });
    }
    if (modified) {
        storageDocModified();
    }
}

function cleanDecorators(element, viewLevel) {
    let modified = false;
    if (viewLevel) {
        forElementAndChildren(element, elem => {
            let valueBefore = elem.getAttribute(viewLevel);
            if (valueBefore) {
                elem.removeAttribute(viewLevel);
                modified = true;
            }
        });
    }
    if (modified) {
        storageDocModified();
    }
}

function forElementAndChildren(element, f) {
    f(element);
    for (const e of element.children) {
        forElementAndChildren(e, f);
    }
}

function clickRmac() {
    app.rmacButton.classList.toggle("selected");
    updateWordStyleSheet()
    if (isMain(getFocus())) {
        updateStatusBar(app.main);
    }
}

function clickSn() {
    app.snButton.classList.toggle("selected");
    updateWordStyleSheet();
    if (isMain(getFocus())) {
        updateStatusBar(app.main);
    }
}

function dblclickRange() {
    app.body.classList.toggle("linkranges");
}

function updateRanges(changedRange, oldValue, linkedRange) {
    if (new Set(app.body.classList).has("linkranges")) {
        const linkedValue = parseInt(linkedRange.value);
        const delta = parseInt(changedRange.value) - oldValue;
        let newLinkedValue = Math.min(100, Math.max(0, linkedValue + delta));
        linkedRange.value = newLinkedValue;
    }
    app.state.range1value = parseInt(app.range1.value);
    app.state.range2value = parseInt(app.range2.value);
}

function updatedRange1() {
    updateRanges(app.range1, app.state.range1value, app.range2);
    updateWordStyleSheet();
}

function updatedRange2() {
    updateRanges(app.range2, app.state.range2value, app.range1);
    updateWordStyleSheet();
}

function computeWordStats(words, snSelected, rmacSelected) {
    let attrs = []
    if (snSelected) attrs.push("sn")
    if (rmacSelected) attrs.push("rmac")
    let stats = new Map()
    let count = 0
    for (w of words) {
        const attr = attrs.map(attr => w.getAttribute(attr) || "").join(",")
        if (attr) {
            count += 1;
            stats.set(attr,(stats.get(attr) || 0) + 1);
        }
    }
    return stats;
}

function filterStats(mainStats, repeatedItemsSet, rangeFrom, rangeTo) {
    let fromLimit = Math.round(repeatedItemsSet.size * rangeFrom / 100)
    let toLimit = Math.round(repeatedItemsSet.size * rangeTo / 100)
    let rareRepeatedItems = mainStats.entries().filter(entry => repeatedItemsSet.has(entry[0])).toArray().toSorted((x,y) => x[1] - y[1]).slice(fromLimit,toLimit)
    let rareRepeatedItemsMap = rareRepeatedItems.reduce((m,e) => m.set(e[0],e[1]),new Map())
    return rareRepeatedItemsMap;
}

function updateWordStyleSheet() {
    if (app.snButton && app.rmacButton && app.wordStyleSheet) {
        let rmacSelected = app.rmacButton.classList.contains("selected")
        let snSelected = app.snButton.classList.contains("selected")
        if (snSelected || rmacSelected) {
            let focus = getFocus();
            if (focus) {
                if (focus.tagName === "WORD") {
                    similarWordsStyleSheet(focus, snSelected, rmacSelected);
                } else if (app.rangesInput.value && app.rangesInput.value.split(" ").filter(x => x.startsWith("G")).length > 0) {
                    closeWordsStyleSheet(focus);
                } else if (app.rangesInput.value && app.rangesInput.value.includes("–")) {
                    let ranges = rangesParseInput(app.rangesInput.value);
                    let words = domCollectElements(app.main, ["word"]);
                    let filteredWords = rangesFilterElements(ranges, words);
                    let repeatedItemsSet = selectDuplicates(filteredWords, snSelected, rmacSelected);
                    areaSimilaritiesStylesheet(repeatedItemsSet, snSelected, rmacSelected);
                } else {
                    let words = domCollectElements(focus, ["word"])
                    let stats = computeWordStats(words, snSelected, rmacSelected);
                    let repeatedItemsSet = stats.entries().filter(entry => entry[1] > 1).toArray().reduce((m,e) => m.add(e[0]),new Set())
                    areaSimilaritiesStylesheet(repeatedItemsSet, snSelected, rmacSelected);
                }
                app.main.classList.remove("markers");
            } else {
                app.wordStyleSheet.replaceSync("")
                app.main.classList.add("markers");
            }
        } else {
            app.wordStyleSheet.replaceSync("")
            app.main.classList.add("markers");
        }
    }
}

function selectDuplicates(listOfWords, snSelected, rmacSelected) {
    let listOfSets = listOfWords.map(words => new Set(computeWordStats(words, snSelected, rmacSelected).keys().toArray()));
    let commonalities = listOfSets.reduce((a,b) => a.intersection(b));
    return commonalities;
}

function similarWordsStyleSheet(focus, snSelected, rmacSelected) {
    let rmac = focus.getAttribute("rmac")
    let sn = focus.getAttribute("sn")
    let style = "word" + (rmacSelected && rmac ? `[rmac="${rmac}"]` : "") + (snSelected && sn ? `[sn="${sn}"]` : "") + " { color: white!important; background-color: black!important; }"
    app.wordStyleSheet.replaceSync(style)
}

function areaSimilaritiesStylesheet(repeatedItemsSet, snSelected, rmacSelected) {
    let mainStats = computeWordStats(domCollectElements(app.main, ["word"]), snSelected, rmacSelected);
    let rangeFrom = parseInt(app.range1.value)
    let rangeTo = parseInt(app.range2.value)
    let filteresFocusStats = filterStats(mainStats, repeatedItemsSet, rangeFrom, rangeTo);
    let style = statsToStyleSheet(filteresFocusStats, snSelected, rmacSelected);
    app.wordStyleSheet.replaceSync(style)
}

function statsToStyleSheet(stats, snSelected, rmacSelected) {
    let style = ""
    let j = 0
    for (const key of stats.keys()) {
        if (stats.get(key) > 1) {
            if (snSelected && rmacSelected) {
                let [sn,rmac] = key.split(",")
                style += "word" + (snSelected && sn ? `[sn="${sn}"]` : "") + (rmacSelected && rmac ? `[rmac="${rmac}"]` : "") + ` { ${app.colors[j % app.colors.length]}!important; }\n`
            } else if (snSelected) {
                style += "word" + (snSelected && key ? `[sn="${key}"]` : "") + ` { ${app.colors[j % app.colors.length]}!important; }\n`
            } else {
                style += "word" + (rmacSelected && key ? `[rmac="${key}"]` : "") + ` { ${app.colors[j % app.colors.length]}!important; }\n`
            }
            j += 1
        }
    }
    return style;
}

function closeWordsStyleSheet(selection) {
    if (app.rangesInput.value) {
        let foundQuotes = [];
        let foundAddresses = new Set();
        let wordsArr = app.rangesInput.value.split(" ").filter(x => x.startsWith("G"));
        let words = new Set(wordsArr);
        let size = words.size;
        let limit = words.size * 2;
        let lang = app.langSelect.value
        let digitsRE = /^[0-9]+$/;
        let digits = app.rangesInput.value.split(" ").filter(x => digitsRE.test(x))
        if (digits && digits.length === 1) {
            limit = parseInt(digits[0]);
        }
        if (words && limit > 0) {
            let focus = getFocus();
            let data = domCollectElements(focus, ["word"]).map(word => {
                let text = word.querySelector(lang) ? word.querySelector(lang).textContent : "";
                return [word.getAttribute("sn"), word.getAttribute("addr"), text];
            });
            for (let j = 0; j < data.length; j++) {
                let candidate = data.slice(j, j+limit);
                let candidateWords = new Set(candidate.map(item => item[0]));
                if (words.intersection(candidateWords).size === size) {
                    let firstIndex = candidate.findIndex(item => words.has(item[0]));
                    let slice = candidate.slice(firstIndex);
                    let sliceAddresses = new Set(slice.map(item => item[1]));
                    if (foundAddresses.intersection(sliceAddresses).size === 0) {
                        let quote = slice[0][1] + " " + slice.map(item => item[2]).filter(x => x).join(" ");
                        foundQuotes.push(quote);
                    }
                    for (item of slice) {
                        if (words.has(item[0])) {
                            foundAddresses.add(item[1]);
                        }
                    }
                }
            }
            let style = ""
            for (let addr of foundAddresses) {
                style += `word[addr="${addr}"] { color: white!important; background-color: black!important; }\n`
            }
            app.textArea.value = app.rangesInput.value + "\n" + foundQuotes.join("\n")
            app.wordStyleSheet.replaceSync(style)
        }
    }
}


function onTextAreaOut() {
    let str = app.textArea.value
    let m = str.match(/^\s*<[a-z]+/)
    if (m && m.length === 1) {
        let focus = getFocus();
        updateDomMainTitles(focus);
        let oldstr = ""
        if (isMain(focus)) {
            oldstr = cleanHTML(focus.innerHTML);
            focus.innerHTML = str;
            updateDomMainIds(app.main);
        } else {
            oldstr = cleanHTML(focus.outerHTML);
            let parent = focus.parentElement;
            let prefix = m[0]
            let suffix = str.substring(prefix.length)
            focus.outerHTML = prefix + ` id="selection"` + suffix;
            updateDomMainIds(parent);
            if (parent.getAttribute("visible")) {
                markVisibility(parent, parent.getAttribute("addr"))
            }
        }
        if (str !== oldstr) {
            storageDocModified();
        }
        updateViewForElement(focus);
    }
}

function copySelection() {
    let selection = getSelection();
    if (selection) {
        let data = domCollectElements(selection, ["word"]);
        if (data) {
            let addr = data[0].getAttribute("addr");
            let words = data.map(word => word.querySelector(app.langSelect.value).textContent).filter(x => x).join(" ");
            let text = `${addr} ${words}`;
            navigator.clipboard.writeText(text);
            app.statusBar.innerText = `copied ${text.length} characters`;
        }
    }
}

function copyDocument() {
    updateDomMainTitles(app.main);
    prettyFormatElem(app.main,true);
    let text = cleanHTML(app.main.innerHTML);
    prettyFormatElem(app.main,false);
    updateDomMainTitles(app.main, "word");
    navigator.clipboard.writeText(text);
    app.statusBar.innerText = `copied ${text.length} characters`;
}

function pasteDocument() {
    navigator.clipboard.readText().then(text => {
        app.main.innerHTML = text;
        prettyFormatElem(app.main,false)
        updateViewForElement(app.main);
        app.statusBar.innerText = `pasted ${text.length} characters`;
        storageDocModified();
    });
}

function removeFocusPrettyFormatting() {
    withFocus(elem => prettyFormatElem(elem,false))
}

function prettyFormatFocus() {
    withFocus(elem => prettyFormatElem(elem,true))
}

function prettyFormatElem(elem, addTextNodes) {
    removeTransliteration(elem);
    visitElements(elem, 0, 0, removeTextNodes);
    if (addTextNodes) {
        visitElements(elem, 0, 0, formatAddTextNodesFunction());
    }
    addTransliteration(elem);
    storageDocModified();
}

function removeTextNodes(node, level, position) {
    for (const n of node.childNodes) {
        if (n.nodeType === 3 && app.levels.includes(node.tagName.toLowerCase())) {
            node.removeChild(n);
        }
    }
}

SKIP_FORMATTING_TAGS = ["SPAN","CHAPTER","VERSE","GR" ,"PL" ,"EN" ,"ES" ,"FR" ,"IT" ,"TL"]

function formatAddTextNodesFunction() {
    return function(node, level, position) {
        if (SKIP_FORMATTING_TAGS.includes(node.tagName)) {
            return;
        }
        node.insertBefore(document.createTextNode("\n"), node.firstChild);
        for (const n of node.children) {
            node.insertBefore(document.createTextNode(prefix(n)), n);
            node.insertBefore(document.createTextNode("\n"), n.nextSibling);
        }
        node.appendChild(document.createTextNode(prefix(node)));
    }
}

function prefix(node) {
    return "".padEnd(prefixLength(node));
}

function prefixLength(node) {
    switch(node.tagName) {
    case "BOOK": return 0
    case "SECTION": return 2
    case "SUBSECTION": return 4
    case "SEQUENCE": return 6
    case "SUBSEQUENCE": return 8
    case "PASSAGE": return 10
    case "PART": return 12
    case "SUBPART": return 14
    case "PIECE": return 16
    case "SEGMENT": return 18
    case "MEMBER": return 20
    case "TERM": return 22
    case "WORD": return 24
    case "CHAPTER": return 24
    case "VERSE": return 24
    default: return 26
    }
}


function fillingText(level,delta) {
    return "\n".padEnd(level*2+delta+2);
}

function storageSaveFocusAs() {
    withSelection(selection => {
        let name = `${selection.getAttribute("addr")}.xml`
        storageSaveHtmlAs(selection.outerHTML, name)
    })
    storageLoadDocument();
}

function splitOnSelection() {
    withSelection(selection => {
        if (selection.previousElementSibling) {
            let newElem = selection.parentElement.cloneNode();
            let childs = [];
            while(selection.previousElementSibling) {
                childs.unshift(selection.parentElement.removeChild(selection.previousElementSibling));
            }
            childs.forEach(child => newElem.appendChild(child));
            selection.parentElement.parentElement.insertBefore(newElem, selection.parentElement);
            storageDocModified();
        }
    });
}

function mergeSelectionLeft() {
    withSelection(selection => {
        if (selection && selection.previousElementSibling && selection.tagName === selection.previousElementSibling.tagName && levelNumber(selection.tagName) > 0) {
            return mergeWithPrev(selection);
        }
    });
}

function mergeSelectionRight() {
    withSelection(selection => {
        if (selection && selection.nextElementSibling && selection.tagName === selection.nextElementSibling.tagName && levelNumber(selection.tagName) > 0) {
            return mergeWithPrev(selection.nextElementSibling);
        }
    });
}

function mergeWithPrev(elem) {
    let childs = []
    for (const child of elem.children) {
        childs.push(child);
    }
    for (const child of childs) {
        elem.previousElementSibling.appendChild(child);
    }
    const prevElem = elem;
    elem = elem.previousElementSibling;
    prevElem.parentElement.removeChild(prevElem);
    storageDocModified();
    return elem;
}

function shiftSelectionLeft() {
    withSelection(selection => {
        if (selection) {
            let elements = document.getElementsByTagName(selection.tagName);
            let prevElement = findPrev(elements, selection);
            if (prevElement && prevElement.parentElement !== selection.parentElement) {
                let parent = selection.parentElement;
                let parentLikeElements = document.getElementsByTagName(selection.parentElement.tagName);
                let prevParentLike = findPrev(parentLikeElements, selection.parentElement);
                if (prevParentLike) {
                    prevParentLike.appendChild(selection);
                    removeEmptyElements(parent);
                }
                storageDocModified();
            }
        }
    });
}

function removeEmptyElements(element) {
    while (element.children.length === 0 && !isMain(element)) {
        let parentElement = element.parentElement;
        parentElement.removeChild(element);
        element = parentElement;
    }
}

function shiftSelectionRight() {
    withSelection(selection => {
        if (selection) {
            let elements = document.getElementsByTagName(selection.tagName);
            let nextElement = findNext(elements, selection);
            if (nextElement && nextElement.parentElement !== selection.parentElement) {
                let parent = selection.parentElement;
                let parentLikeElements = document.getElementsByTagName(selection.parentElement.tagName);
                let nextParentLike = findNext(parentLikeElements, selection.parentElement);
                if (nextParentLike) {
                    nextParentLike.insertBefore(selection, nextParentLike.firstChild);
                    removeEmptyElements(parent);
                }
                storageDocModified();
            }
        }
    });
}

function maybeUpdateElement(element, item) {
    let changes = 0
    changes += maybeUpdateElementAttr("sn", element, item)
    changes += maybeUpdateElementAttr("rmac", element, item)
    for (const level of app.levels) {
        changes += maybeUpdateElementAttr(level, element, item)        
    }
    changes += maybeUpdateElementChild("gr", element, item)
    changes += maybeUpdateElementChild("fr", element, item)
    changes += maybeUpdateElementChild("en", element, item)
    changes += maybeUpdateElementChild("pl", element, item)
    changes += maybeUpdateElementChild("es", element, item)
    return changes
}

function maybeUpdateElementAttr(attr, element, item) {
    let elementAttr = element.getAttribute(attr)
    if (item[attr] && elementAttr && item[attr] !== elementAttr) {
        element.setAttribute(attr, item[attr])
        return 1
    } else if (item[attr] && !elementAttr) {
        element.setAttribute(attr, item[attr])
        return 1
    }
    return 0
}

function maybeUpdateElementChild(tag, element, item) {
    let childElements = element.getElementsByTagName(tag)
    if (item[tag] && childElements.length === 1 && item[tag] !== childElements[0].innerText) {
        const oldHTML = childElements[0].innerHTML
        const nodes = textToNodes(item[tag])
        childElements[0].replaceChildren(...nodes)
        return 1
    } else if (item[tag] && childElements.length === 0) {
        let tagElem = document.createElement(tag)
        const nodes = textToNodes(item[tag])
        tagElem.replaceChildren(...nodes)
        element.appendChild(tagElem)
        return 1
    } else if (childElements.length === 0) {
        let tagElem = document.createElement(tag)
        element.appendChild(tagElem)
        return 1
    } else if (childElements.length > 1) {
        return 0
    }
    return 0
}

function textToNodes(text) {
    let nodes = []
    var matches = text.matchAll(/([-\p{L}\s'᾽[\](){}]+)|([^-\p{L}\s'᾽[\](){}]+)/gu)
    matches.forEach(match => {
        if (match[1]) {
            const t = document.createTextNode(match[1])
            nodes.push(t)
        } else {
            let span = document.createElement("span")
            const t = document.createTextNode(match[2])
            span.appendChild(t)
            nodes.push(span)
        }
    })
    return nodes
}

function removeLevelsAbove() {
    withFocus(focus => {
        let tags = levelTags(app.levelSelect.value)
        let elements = domCollectElements(focus, tags);
        focus.innerHTML = ""
        for (e of elements) {
            focus.appendChild(e)
        }
    });
    updateDom(app.main);
}

function delLevel() {
    withSelection(selection => {
        let parent = selection.parentNode;
        let childs = [];
        for (child of selection.children) {
            childs.push(child);
        }
        childs.forEach(child => parent.insertBefore(child, selection));
        parent.removeChild(selection);
        return parent;
    });
    storageDocModified();
}

function addLevel(delta) {
    withSelection(selection => {
        let tag = selection.tagName.toLowerCase()
        for (j = 0; j < delta; j++) {
            tag = findPrev(app.levels, tag)
        }
        if (tag) {
            if (tag !== selection.parentElement.tagName.toLowerCase()) {
                let newElem = document.createElement(tag);
                if (selection.getAttribute("visible") === "true") {
                    newElem.setAttribute("visible", "true");
                }
                let parent = selection.parentElement;
                parent.replaceChild(newElem, selection);
                newElem.replaceChildren(selection);
                return newElem;
            } else {
                if (!isThisTopElement(selection)) {
                    return selection.parentElement;
                }
            }
        }
    });
    populateLevelsSelect();
    storageDocModified();
}

function addLevelDown(delta) {
    withSelection(selection => {
        let tag = selection.tagName.toLowerCase()
        for (j = 0; j < delta; j++) {
            tag = findNext(app.levels, tag)
        }
        if (tag) {
            if (selection.children.length === 0 ||
                (selection.children.length > 0 && tag !== selection.children[0].tagName.toLowerCase())) {
                let newElem = document.createElement(tag);
                if (selection.getAttribute("visible") === "true") {
                    newElem.setAttribute("visible", "true");
                }
                let children = []
                for (c of selection.children) {
                    children.push(c)
                }
                for (c of children) {
                    newElem.appendChild(c)
                }
                selection.replaceChildren(newElem);
                return newElem;
            } else if (selection.children.length > 0) {
                return selection.children[0];
            }
        }
    });
    populateLevelsSelect();
    storageDocModified();
}

function addLevelDp(delta) {
    withFocus(focus => {
        let currentLevelNum = levelNumber(app.levelSelect.value)
        let nextLevelNum = currentLevelNum + delta
        let scoreFunction = levelScoreFunction(app.levelSelect.value)
        if (Number.isInteger(currentLevelNum) && Number.isInteger(nextLevelNum) && scoreFunction) {
            let nextLevelName = levelName(nextLevelNum);
            let [data, oldBoundaries] = collectData(focus, currentLevelNum)
            let scores = calculateScores(data, oldBoundaries, currentLevelNum, scoreFunction)
            let [dp,pp] = calculateDpSuffixes(scores, oldBoundaries, currentLevelNum)
            let newBoundaries = ppUpdateBoundaries(pp, oldBoundaries, nextLevelNum)
            focus.innerHTML = ""
            storageDocModified();
            dataAndBoundariesToDOM(focus, data, newBoundaries)
            updateDom(focus)
            if (nextLevelName) {
                app.levelSelect.value = nextLevelName;
            }
        } else {
            console.log(`WARNING: skip in focusDp: currentLevelNum: ${currentLevelNum} scoreFunction: ${scoreFunction}`)
        }
    });
    populateLevelsSelect();
    storageDocModified();
}

function levelTags(name) {
    switch(name.toLowerCase()) {
    case "word": return ["CHAPTER","VERSE","WORD"];
    default: return [name.toUpperCase()];
    }
}

function levelNumber(name) {
    switch(name.toLowerCase()) {
    case "word": return 0
    case "chapter": return 0
    case "verse": return 0
    case "term": return 1
    case "member": return 2
    case "segment": return 3
    case "piece": return 4
    case "subpart": return 5
    case "part": return 6
    case "passage": return 7
    case "subsequence": return 8
    case "sequence": return 9
    case "subsection": return 10
    case "section": return 11
    case "book": return 12
    }
}

function levelScoreFunction(name) {
    switch(name.toLowerCase()) {
    case "word": return scoreTerm
    case "term": return scoreMember
    case "member": return scoreSegment
    case "segment": return scorePiece
    case "piece": return scoreSubpart
    case "subpart": return scorePart
    case "part": return scorePassage
    case "passage": return scoreSubsequence
    case "subsequence": return scoreSequence
    case "sequence": return scoreSubsection
    case "subsection": return scoreSection
    }
}

const MAIN_WORD_RE = /^D-|^V-|^N-|^A-|^ADV|^P-/
const PREFIX_WORD_RE = /^CONJ$|^PREP$|^T-/
const SUFFIX_WORDS = ["G3568"]
const SECOND_WORDS = ["G1161","G3767","G1063"]
const VERB_RE = /^V-/

function scoreTerm(data,boundaries,i,j) {
    let length = j - i
    let mainWordCount = 0
    let prefixWordCount = 0
    let verseFirstWordCount = 0
    let secondWordCount = 0
    let suffixWordCount = 0
    let wrongPositionCount = 0
    for (let k = i; k < j; k++) {
        word = data[k]
        if (isVerseFirstWord(word) && k == i) {
            verseFirstWordCount += 1
        }
        if (isMainWord(word)) {
            mainWordCount += 1
        }
        if (isSecondWord(word) && k == i + 1) {
            secondWordCount += 1
        }
        if (isPrefixWord(word) && mainWordCount == 0) {
            prefixWordCount += 1
        }
        if (isPrefixWord(word) && mainWordCount > 0) {
            wrongPositionCount += 1
        }
        if (isSuffixWord(word) && mainWordCount == 0) {
            wrongPositionCount += 1
        }
        if (isSuffixWord(word) && mainWordCount > 0) {
            suffixWordCount += 1
        }
    }
    result = verseFirstWordCount*20
    if (mainWordCount === 1) {
        result += 10
        result += prefixWordCount + secondWordCount*4 + suffixWordCount
    } else {
        result -= 10
    }
    result -= wrongPositionCount * 100
    return result
}

function scoreMember(data,boundaries,i,j) {
    let filteredBoundaries = boundaries.slice(i,j).filter(x => x >= 1)
    let length = filteredBoundaries.length
    if (length > 6) {
        return -9999
    }
    let verbCount = 0
    for (let k = i; k < j; k++) {
        let word = data[k]
        if (isVerb(word)) {
            verbCount += 1
        }
    }
    let result = length
    if (verbCount === 1) {
        result += 20
    } else if (verbCount > 1) {
        result += 10
    } else {
        result -= 20
    }
    if (j-i >= 2) {
        let word2 = data[i+1]
        if (isSecondWord(word2)) {
            result += 20
        }
    }
    let word1 = data[i]
    if (isVerseFirstWord(word1)) {
        result += 30
    }
    return result
}

function scoreRange(data,boundaries,i,j,level,maxNumOfSubparts,subpartsNumScores) {
    let score = 0;
    let indices = boundariesToIndices(boundaries,level,i,j)
    let numOfSubparts = indices.length - 1
    if (numOfSubparts <= maxNumOfSubparts) {
        let numOfSubpartsScore = subpartsNumScores[numOfSubparts];
        if (numOfSubpartsScore) {
            score += numOfSubpartsScore;
        }
        score += scoreExtremeTerms(data,boundaries,i,j);
        score += scoreTerms(data,boundaries,i,j,level,calculateInitialTermsRanges);
        score += scoreTerms(data,boundaries,i,j,level,calculateFinalTermsRanges);
        score += scoreTerms(data,boundaries,i,j,level,calculateMedianTermsRanges);
        score += scoreTerms(data,boundaries,i,j,level,calculateCentralTermsRanges);
    } else {
        score = -999999;
    }
    return score;
}

function scoreExtremeTerms(data,boundaries,i,j) {
    let len = j - i;
    let extremeAreaLen = Math.round(len*0.20);
    if (extremeAreaLen === 0) {
        extremeAreaLen = 1;
    }
    let score = scoreTwoRanges(data, i, i + extremeAreaLen, j - extremeAreaLen, j)
    return score;
}

function scoreTerms(data,boundaries,i,j,level,termRangesFunction) {
    let indices = boundariesToIndices(boundaries,level,i,j)
    let ranges = indicesToRanges(indices)
    let rangePairs = pairsOfElements(ranges)
    let score = 0
    for (pair of rangePairs) {
        let [range1,range2] = termRangesFunction(pair[0], pair[1])
        score += scoreTwoRanges(data, range1[0], range1[1], range2[0], range2[1])
    }
    return score;
}

function scoreTwoRanges(data,ibeg,iend,jbeg,jend) {
    let score = 0;
    for (i = ibeg; i < iend; i++) {
        for (j = jbeg; j < jend; j++) {
            score += scoreWordSimilarity(data[i], data[j])
        }
    }
    return score;
}

function rangeTermsLengths(range1, range2) {
    let len1 = 1 + Math.trunc((range1[1] - range1[0])*0.25)
    let len2 = 1 + Math.trunc((range2[1] - range2[0])*0.25)
    return [len1, len2];
}

function calculateInitialTermsRanges(range1, range2) {
    let [len1, len2] = rangeTermsLengths(range1, range2);
    return [[range1[0], range1[0]+len1], [range2[0], range2[0]+len2]]
}

function calculateFinalTermsRanges(range1, range2) {
    let [len1, len2] = rangeTermsLengths(range1, range2);
    return [[range1[1]-len1, range1[1]], [range2[1]-len2, range2[1]]]
}

function calculateMedianTermsRanges(range1, range2) {
    let [len1, len2] = rangeTermsLengths(range1, range2);
    return [[range1[1]-len1, range1[1]], [range2[0], range2[0]+len2]]
}

function calculateCentralTermsRanges(range1, range2) {
    let r1beg = Math.trunc((range1[1] - range1[0])*0.33)
    let r1end = 1 + Math.trunc((range1[1] - range1[0])*0.66)
    let r2beg = Math.trunc((range2[1] - range2[0])*0.33)
    let r2end = 1 + Math.trunc((range2[1] - range2[0])*0.66)
    return [[r1beg, r1end], [r2beg, r2end]]
}

function scoreSegment(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,2,3,{1:10,2:20,3:15})
}

function scorePiece(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,3,3,{1:10,2:20,3:15})
}

function scoreSubpart(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,4,5,{})
}

function scorePart(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,5,5,{})
}

function scorePassage(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,6,99,{})
}

function scoreSubsequence(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,7,99,{})
}

function scoreSequence(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,8,99,{})
}

function scoreSubsection(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,9,99,{})
}

function scoreSection(data,boundaries,i,j) {
    return scoreRange(data,boundaries,i,j,10,99,{})
}

function boundariesToRanges(boundaries,level,i,j) {
    return indices
}

function indicesToRanges(indices) {
    let ranges = [];
    for (k = 0; k < indices.length - 1; k++) {
        ranges.push([indices[k],indices[k+1]]);
    }
    return ranges;
}

function scoreWordSimilarity(word1, word2) {
    let score = 0;
    if (word1["sn"] === word2["sn"]) {
        score += 2;
    }
    if (word1["rmac"] === word2["rmac"] && word1["rmac"] !== "PREP" && !word1["rmac"].startsWith("T-")) {
        score += 1;
    }
    return score;
}

function isVerb(w) {
    if (w && w["rmac"]) {
        return VERB_RE.test(w["rmac"])
    } else {
        return false;
    }
}

function isPrefixWord(w) {
    if (w && w["rmac"]) {
        return PREFIX_WORD_RE.test(w["rmac"])
    } else {
        return false;
    }
}

function isSuffixWord(w) {
    if (w && w["sn"]) {
        return SUFFIX_WORDS.includes(w["sn"])
    } else {
        return false;
    }
}

function isVerseFirstWord(w) {
    return w && w["addr"] && w["addr"].endsWith(".1")
}

function isSecondWord(w) {
    if (w && w["sn"]) {
        return SECOND_WORDS.includes(w["sn"])
    } else {
        return false;
    }
}

function isMainWord(w) {
    if (w && w["rmac"]) {
        return MAIN_WORD_RE.test(w["rmac"]) && !isPrefixWord(w) && !isSecondWord(w) && !isSuffixWord(w)
    } else {
        return false;
    }
}

function levelName(number) {
    switch(number) {
    case 0: return "word"
    case 1: return "term"
    case 2: return "member"
    case 3: return "segment"
    case 4: return "piece"
    case 5: return "subpart"
    case 6: return "part"
    case 7: return "passage"
    case 8: return "subsequence"
    case 9: return "sequence"
    case 10: return "subsection"
    case 11: return "section"
    case 12: return "book"
    }
}

function collectData(topElement, maxLevel) {
    let boundaries = []
    let data = []
    function visitElement(elem) {
        if (elem.tagName === "WORD") {
            let item = wordToItem(elem)
            data.push(item)
            let boundary = Math.min(findBoundaryLevel(topElement, elem), maxLevel)
            boundaries.push(boundary)
        }
    }
    forRbsElementAndChildren(topElement, visitElement)
    if (boundaries.length > 0) {
        boundaries.push(boundaries[0])
    }
    return [data, boundaries]
}

function findBoundaryLevel(topElement, element) {
    if (element === topElement) {
        return 999;
    } else {
        while (element.previousElementSibling &&
               ["CHAPTER","VERSE"].includes(element.previousElementSibling.tagName)) {
            element = element.previousElementSibling;
        }
        if (element.previousElementSibling) {
            return levelNumber(element.tagName)
        } else {
            return findBoundaryLevel(topElement, element.parentElement)
        }
    }
}

function wordToItem(element) {
    let item = {}
    if (element) {
        if (element.getAttribute("addr")) {
            item["addr"] = element.getAttribute("addr")
        }
        if (element.getAttribute("sn")) {
            item["sn"] = element.getAttribute("sn")
        }
        if (element.getAttribute("rmac")) {
            item["rmac"] = element.getAttribute("rmac")
        }
        for (const level of app.levels) {
            if (element.getAttribute(level)) {
                item[level] = element.getAttribute(level)
            }
        }
        for (const c of element.children) {
            for (const t of app.languages) {
                if (c.tagName.toLowerCase() === t) {
                    item[t] = c.innerText
                }
            }
        }
    }
    return item
}


function forRbsElementAndChildren(element, f) {
    for (const e of element.children) {
        f(e);
        forRbsElementAndChildren(e, f);
    }
}

function calculateScores(data, boundaries, level, scoreFunction) {
    let scores = {}
    let indices = boundariesToIndices(boundaries, level)
    for (let i_index = 0; i_index < indices.length - 1; i_index++) {
        const i = indices[i_index];
        const indicesGreaterThanI = indices.filter(x => x > i)
        for (j of indicesGreaterThanI) {
            scores[`${i},${j}`] = scoreFunction(data, boundaries, i, j)
        }
    }
    return scores
}

function boundariesToIndices(boundaries, level, i, j) {
    let boundariesIJ = boundaries;
    let index = 0
    if (i !== undefined && j !== undefined) {
        boundariesIJ = boundaries.slice(i, j+1)
        index = i;
    }
    let indices = []
    for (b of boundariesIJ) {
        if (b >= level) {
            indices.push(index)
        }
        index += 1
    }
    return indices
}

function calculateDpSuffixes(scores, boundaries, level, n) {
    if (!n) {
        n = boundaries.length - 1
    }
    let dp = {}
    let pp = {}
    let indices = boundariesToIndices(boundaries, level).filter(j => j <= n)
    let reversedIndices = Array(...indices).reverse()
    for (const i of reversedIndices) {
        let bestScore = undefined
        let bestIndex = undefined
        for (j of indices.filter(j =>  j > i)) {
            let suffixScore = dp[j] || 0
            let scoreJ = scores[`${i},${j}`] + suffixScore
            if (!bestScore || scoreJ > bestScore) {
                bestScore = scoreJ
                bestIndex = j
            }
        }
        if (bestIndex) {
            dp[i] = bestScore
            pp[i] = bestIndex
        }
    }
    return [dp, pp]
}

function ppUpdateBoundaries(pp, inBoundaries, level) {
    let boundaries = Array(...inBoundaries)
    boundaries[0] = level
    let i = 0
    while (pp[i]) {
        let j = pp[i]
        boundaries[j] = level
        i = j
    }
    return boundaries
}

function dataAndBoundariesToDOM(parent, data, boundaries) {
    let cursor = parent
    let index = 0
    let chapter = undefined;
    let verse = undefined;
    while (index < data.length) {
        cursor = openTags(cursor, boundaries[index])
        let [c,v,w] = rangesParseChapterVerseWord(data[index]["addr"],undefined,undefined,undefined)
        if (c && (!chapter || chapter != c)) {
            chapter = c;
            verse = undefined;
            cursor.appendChild(createElementWithText("chapter",chapter));
        }
        if (v && (!verse || verse != v)) {
            verse = v;
            cursor.appendChild(createElementWithText("verse",verse));
        }
        let word = itemToWord(data[index])
        cursor.appendChild(word)
        index += 1
        cursor = closeTags(cursor, boundaries[index])
    }
    return parent
}

function openTags(cursor, level) {
    while (level > 0) {
        let tag = levelName(level).toUpperCase()
        let elem = document.createElement(tag)
        cursor.appendChild(elem)
        level = level - 1
        cursor = elem
    }
    return cursor
}

function closeTags(cursor, level) {
    while (levelNumber(cursor.tagName) <= level) {
        cursor = cursor.parentElement
    }
    return cursor
}

function itemToWord(item) {
    var element = document.createElement("word")
    maybeUpdateElement(element, item)
    return element
}

function pairsOfElements(lst) {
    // return all pairs of elements of the given list
    if (lst.length <= 1) {
        return [];
    } else {
        let lst1 = lst.slice(1);
        let result1 = []
        for (elem of lst1) {
            result1.push([lst[0], elem]);
        }
        let result2 = pairsOfElements(lst1)
        return [...result1, ...result2]
    }
}
