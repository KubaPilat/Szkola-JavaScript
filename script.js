var tab = [1, 2, 3, 4, 5], i, suma=0;

for (i = 0; i < tab.length; i++) {
	if(i>2){
		suma= suma + tab[i];
		document.write(suma, "|")
	}
}

// for (i = 0; i < tab.length; i++) {
// 	document.write(suma, "|")
// }