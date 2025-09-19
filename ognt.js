
function initOgntApp() {
    app.main = document.getElementById("main");
    app.ogntTextArea = document.getElementById("ognttextarea");
    app.textArea = document.getElementById("textarea");
}

function parseOgnt() {
    if (app.ogntTextArea.value !== "") {
        let elements = domCollectElements(app.main, ["chapter","verse","word"]);
        let items = ogntLoadItems()
        let changes = ogntZipScan(app.main, elements, items)
        updateTextArea(app.main);
    }
}

function ogntLoadItems() {
    let ognt = app.ogntTextArea.value
    let result = []
    let lines = ognt.split("\n")
    var verse = -1
    var word = 0
    for (const line of lines) {
        let item = {}
        let columns = line.split("\t")
        if (columns.length < 11) {
            break;
        }
        let fields6 = columns[6].substring(1,columns[6].length-1).split("｜")
        let book = parseInt(fields6[0])
        let chapter = parseInt(fields6[1])
        let prev_verse = verse
        verse = parseInt(fields6[2])
        word = verse == prev_verse ? word + 1 : 1
        item["chapter"] = chapter
        item["verse"] = verse
        item["word"] = word
        let fields7 = columns[7].substring(1,columns[7].length-1).split("｜")
        item["gr"] = fields7[2]
        item["rmac"] = fields7[4]
        item["sn"] = fields7[5]
        fields10 = columns[10].substring(1,columns[10].length-1).split("｜")
        item["en"] = fields10[2]
        item["es"] = fields10[4]
        result.push(item)
    }
    return result
}

function ogntZipScan(focus, elementsArg, itemsArg) {
    let elements = elementsArg.values();
    let items = itemsArg.values();
    let element = elements.next();
    let item = items.next();
    let itemAddr = undefined;
    let elemAddr = undefined;
    let changes = 0
    let chapterNeeded = true
    let verseNeeded = true
    while(item.value) {
        let prevItemAddr = itemAddr;
        itemAddr = [item.value["chapter"],item.value["verse"],item.value["word"]]
        if (!prevItemAddr || prevItemAddr[0] !== itemAddr[0]) {
            chapterNeeded = true;
        }
        if (!prevItemAddr || prevItemAddr[1] !== itemAddr[1]) {
            verseNeeded = true;
        }
        if (element.value && item.value && !elemAddr) {
            elemAddr = itemAddr;
            chapterNeeded = true;
            verseNeeded = true;
        }
        if (element.value && element.value.tagName === "CHAPTER") {
            elemAddr = [parseInt(element.value.innerText),1,1]
            element = elements.next();
            chapterNeeded = false;
            verseNeeded = true;
        } else if (element.value && element.value.tagName === "VERSE") {
            elemAddr = [elemAddr[0],parseInt(element.value.innerText),1]
            element = elements.next();
            verseNeeded = false;
        } else if (element.value && element.value.tagName === "WORD") {
            if (addrCompare(elemAddr, itemAddr) > 0) {
                item = items.next();
            } else if (addrCompare(elemAddr, itemAddr) < 0) {
                element = elements.next();
            } else {
                if (chapterNeeded) {
                    let chapterElement = createElementWithText("chapter",itemAddr[0]);
                    element.value.parentElement.insertBefore(chapterElement, element.value);
                    chapterNeeded = false;
                }
                if (verseNeeded) {
                    let verseElement = createElementWithText("verse",itemAddr[1]);
                    element.value.parentElement.insertBefore(verseElement, element.value);
                    verseNeeded = false;
                }
                changes += maybeUpdateElement(element.value, item.value)
                element = elements.next();
                item = items.next();
                elemAddr = [elemAddr[0],elemAddr[1],elemAddr[2]+1];
            }
        } else {
            if (chapterNeeded) {
                let chapterElement = createElementWithText("chapter",itemAddr[0]);
                focus.appendChild(chapterElement);
                chapterNeeded = false;
            }
            if (verseNeeded) {
                let verseElement = createElementWithText("verse",itemAddr[1]);
                focus.appendChild(verseElement);
                verseNeeded = false;
            }
            let newElement = document.createElement("word")
            changes += maybeUpdateElement(newElement, item.value)
            focus.appendChild(newElement)
            item = items.next();
        }
    }
    return changes
}

