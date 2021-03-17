function wyswietlanie(){
	document.write("Hello World");
}

wyswietlanie();

document.write('<br>');

function wyswietlanie1(imie){
	document.write("Witaj ",imie);
}

wyswietlanie1("Kuba");

document.write('<br>');

function wyswietlanie2(){
	document.write("Hello World z data ");
	return new Date();
}
var pokaz = wyswietlanie2();
document.write(pokaz);

document.write('<br>');

function wyswietlanie2(imie){
	document.write("hej ", imie, " ");
	return new Date();
}
var pokaz = wyswietlanie2("Kuba");
document.write(pokaz);