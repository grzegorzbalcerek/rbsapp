if test -z "$2"; then
    echo "Expected 2 or 3 arguments: <book> <range> [OpenGNT-file-path]"
    exit 1
fi
BOOK=$1
RANGE=$2
if test -n "$3"; then
    OGNTFILE=$3
else
    OGNTFILE=../OpenGNT/OpenGNT_version3_3.csv
fi
awk -v book=$BOOK -v range=$RANGE -f ogntfilter.awk $OGNTFILE
