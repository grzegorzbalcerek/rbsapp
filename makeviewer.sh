if test -z "$1"; then
    echo "Expected 1 argument: <input-xml-file>"
    exit 1
fi

INPUT=$1
INPUTBASENAME=$(basename $1)
BASE=$(dirname $(realpath $0))
VIEWERFILE=$BASE/viewer$INPUTBASENAME.html

awk -v input=$INPUT '
/href="app.css"/ {
  print "    <style>"
  while(line = getline < "app.css") {print "      "$0}
  print "    </style>"
  $0 = "skip"
}
/src="app.js"/ {
  print "    <script>"
  while(line = getline < "app.js") {print "      "$0}
  print "    </script>"
  $0 = "skip"
}
/editorstart/,/editorstop/ { $0 = "skip" }
/<\/main>/ {
  while(line = getline < input) {print "      "$0}
}
{if ($0 != "skip") print }
' rbsapp.html > $VIEWERFILE

