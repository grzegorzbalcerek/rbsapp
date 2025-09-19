BASE=$(dirname $(realpath $0))
mkdir -p $BASE/out
cp $BASE/app/*.js $BASE/out/
cp $BASE/app/*.css $BASE/out/
for F in $(cd $BASE/in; ls *.xml); do
    FILEBASE=$(basename --suffix=.xml $F)
    INFILE=$BASE/in/$F
    OUTFILE=$BASE/out/$FILEBASE.html
    awk 'NR==1 , /<main /' $BASE/app/app.html > $OUTFILE
    awk 'NR!=1' $INFILE >> $OUTFILE
    awk '/<\/main>/ , NR==99999999' $BASE/app/app.html >> $OUTFILE
    echo "File $OUTFILE created"
done
