// var wektor = [];
// var i;
// // szachownica I liniowa
// for (i = 0; i < 10; i++) {
// 	wektor[i]=i%2
// }
// document.write(wektor, '<br>')

// tablica dwuwymiarowa - macierz
var wektor = [ [1, 2, 3], 
				[4, 5, 6], 
				[7, 8, 9]  ]; 
var k;
var w;			//	[w0, w1, w2]

for(w = 0; w < wektor.length; w++) {
	for(k = 0; k < wektor[w].length; k++) {
		document.write(wektor[w][k] + " "); 
	}
	document.write("<br>");
}

for(w = 0; w < wektor.length; w++) {
	for(k = 0; k < wektor[w].length; k++) {
		wektor[w][k] = 0; // wektor[w][k]
	}
}

// szybki podglÄd
document.write("</br>" + wektor + "</br></br>");