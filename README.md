countrymovies
=============

phantomjs project grabbing most mentioned movies by country results from google.
If you google "countryname best films", you'll get a banner of nicely formated results
and I thought it'd be interesting and useful to have those all in one page.
I've additionally linked each movie to a youtube search to view the trailer. 

steps for how you could create the page:
1) clone code 
2) in unix, go to directory and run:
while read c; do echo $c; phantomjs getmoviesbycountry.js $c; sleep 0.1; done < countrylist
 
3) this generates some size zero files (for countries which return no results via google) so remove them:
find . -size 0 -exec rm {} \;

4) now move all html files into "country" folder and then merge them into one big file and edit to show
mkdir country
mv *.html country
cd country/
for i in *.html; do echo "<div class='country'>$i</div>" >> movies.html; v=`cat $i`; echo "$v" >> movies.html;  done

5) the rest is just adding html/js/css to the file, and some text processing, which I did largely via vim.
