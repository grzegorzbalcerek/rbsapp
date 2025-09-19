
function initTranslationApp() {
    app.langSelect = document.getElementById("langselect");
    app.main = document.getElementById("main");
    app.body = document.getElementById("body");
    app.textArea = document.getElementById("textarea");
    app.initialTextArea = document.getElementById("initialtextarea");
    if (!app.initialTextArea.value) {
        app.initialTextArea.value = "<paste initial xml here>"
    }
    app.wordsTextArea = document.getElementById("wordstextarea");
    if (!app.wordsTextArea.value) {
        app.wordsTextArea.value = "<paste translation words here>"
    }
    app.wordsDiv = document.getElementById("wordsdiv");
    populateLangsSelect();
    app.main.addEventListener("click", singleClick);
    app.main.addEventListener("dblclick", doubleClick);
}

function parseWords() {
    app.main.innerHTML = app.initialTextArea.value
    app.main.setAttribute("lang", app.langSelect.value);
    let wordElement = createElementWithText("span", "----")
    wordElement.addEventListener("click", wordClicked("-"));
    app.wordsDiv.appendChild(wordElement);
    app.wordsDiv.appendChild(document.createTextNode(" "));
    let words = app.wordsTextArea.value.split(/[ \n]+/);
    for (word of words) {
        wordElement = createElementWithText("span", word)
        wordElement.addEventListener("click", wordClicked(word));
        app.wordsDiv.appendChild(wordElement);
        app.wordsDiv.appendChild(document.createTextNode(" "));
    }
    app.body.classList.add("wordsmode");
}

function wordClicked(word) {
    return function(e) {
        withSelection(selection => {
            let lang = app.langSelect.value
            if (lang && selection.tagName === "WORD") {
                if (e.altKey) {
                    replaceLangElement(selection, lang, "");
                    let newSelection = findPrevNextElement(selection, findNext, _ => ["WORD"]);
                    replaceLangElement(newSelection, lang, word);
                    return findPrevNextElement(newSelection, findNext, _ => ["WORD"]);
                } else if (e.ctrlKey) {
                    addToLangElement(findPrevNextElement(selection, findPrev, _ => ["WORD"]), lang, ` ${word}`);
                } else {
                    replaceLangElement(selection, lang, word);
                    return findPrevNextElement(selection, findNext, _ => ["WORD"]);
                }
            }
        });
    }
}

function replaceLangElement(element, lang, word) {
    for (const langElem of element.getElementsByTagName(lang)) {
        element.removeChild(langElem);
    }
    const newLangElem = createElementWithText(lang, word);
    element.appendChild(newLangElem);
}

function addToLangElement(element, lang, word) {
    let langElems = element.getElementsByTagName(lang);
    if (langElems.length > 0) {
        let langElem = langElems[langElems.length - 1];
        let textNode = document.createTextNode(word);
        langElem.appendChild(textNode);
    }
}
