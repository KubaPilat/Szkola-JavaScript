var wektor = [];
var i;
// dodanie randomowe
for (i = 0; i < 10; i++) {
	wektor[i] = Math.floor(Math.random() * 11);
}

document.write(wektor + '<br>');
// if wiekszy niz np.5
for (i = 0; i < 10; i++) {
	if (wektor[i] > 5) {
		document.write(wektor[i] + '|')
	}
}

document.write('<br>');
// sortowanie
var min = wektor[0];
for (i = 0; i < 10; i++) {
	if (wektor[i] < min) {
		min = wektor[i];
	}
}

document.write(min,'<br>')
//ciag fibonacciego
wektor[0]=0;
wektor[1]=1;
for (i = 2; i < 20; i++) {
	wektor[i] = wektor[i-1] + wektor[i-2];
}
document.write(wektor)