var lp = 1;

while (lp < 11) {
	document.write('<tr> <td>' + lp + '</td> <td>')
	if (lp % 2 == 0) {
		document.write('parzysta')
	} else {
		document.write('nieparzysta')
	}
	document.write('</td> </tr>')
	lp++
}

document.write('<tr> <td> PETLA FOR</td> <tr>')

for (lp = 1; lp < 11; lp++) {
 	document.write('<tr> <td>' + lp + '</td> <td>')
	if (lp % 2 == 0) {
		document.write('parzysta')
	} else {
		document.write('nieparzysta')
	}
	document.write('</td> </tr>')
}

document.write('<tr> <td> PETLA DO</td> <tr>')

var lp = 1;

do {
	document.write('<tr> <td>' + lp + '</td> <td>')
	if (lp % 2 == 0) {
		document.write('parzysta')
	} else {
		document.write('nieparzysta')
	}
	document.write('</td> </tr>')
	lp++
} while (lp < 11) 

document.write('<br>');

var wektor = [];
 var i;
 for (i = 0; i < 10; i++) {
 	wektor[i] = Math.floor(Math.random() * 11);
 }
 document.write(wektor)

for (i=0; i<10; i++){
	document.write('<tr> <td>'+i+'</td><td>'+wektor[i]+'</td></tr>')
}