bottlesong=""
for(i=99; i>1; i-=1){
    var x = i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall.";
    bottlesong = bottlesong  +x;}

if(i=1){
    var y = (i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    bottlesong=bottlesong+y;}
document.getElementById('myLyrics').textContent=bottlesong;