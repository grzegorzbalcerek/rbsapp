
def word_to_xml(w, prepend_coordinates = False):
    coordinates = []
    c = w["coordinate"]
    if prepend_coordinates and c[3:5] == "01" and c[6:8] == "01":
        coordinates.append(f"""<chapter>{c[0:2]}</chapter>""")
    if prepend_coordinates and c[6:8] == "01":
        coordinates.append(f"""<verse>{c[3:5]}</verse>""")
    opening_tag = [f"""<word sn="{w["sn"]}" rmac="{w["rmac"]}">"""]
    content = [f"""<{lang}>{w[lang]}</{lang}>""" for lang in ["gr", "en", "es"]]
    closing_tag = ["""</word>"""]
    items = coordinates + opening_tag + content + closing_tag
    return "".join(items)


def open_tags(level):
    arr = []
    if level >= 3: arr.append("<segment>")
    if level >= 2: arr.append("<member>")
    if level >= 1: arr.append("<term>")
    return arr


def close_tags(level):
    arr = []
    if level >= 1: arr.append("</term>")
    if level >= 2: arr.append("</member>")
    if level >= 3: arr.append("</segment>")
    return arr


def data_to_xml(data, boundaries):
    arr = []
    arr.extend(open_tags(boundaries[0]))
    for index, word in enumerate(data):
        arr.append(word_to_xml(word, True))
        arr.extend(close_tags(boundaries[index+1]))
        if index+2 < len(boundaries):
            arr.extend(open_tags(boundaries[index+1]))
    return "\n".join(arr)
