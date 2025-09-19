

def word_to_text(w):
    return w["gr"]


def open_text_separators(level):
    arr = []
    return arr


def close_text_separators(level):
    arr = []
    if level == 0: arr.append(" ")
    elif level == 1: arr.append("     ")
    elif level == 2: arr.append("\n")
    elif level == 3: arr.append("\n")
    return arr


def data_to_text(data, boundaries):
    arr = []
    arr.extend(open_text_separators(boundaries[0]))
    for index, word in enumerate(data):
        arr.append(word_to_text(word))
        arr.extend(close_text_separators(boundaries[index+1]))
        if index+2 < len(boundaries):
            arr.extend(open_text_separators(boundaries[index+1]))
    return "".join(arr)
