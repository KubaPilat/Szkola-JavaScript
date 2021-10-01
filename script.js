function obliczanie() {
    let a = prompt("Wpisz liczbę: ");
    a = parseInt(a);

    if (a > 0) {
        let wynik = Math.sqrt(a);
        alert("Pierwiastek wynosi: " + wynik)
    } else if (a < 0) {
        alert("Podaj liczbę większa niz 0")
    } else {
        alert("Odśwież i podaj liczbę")
    }
}

obliczanie()

var i =0

while (i<10) {
    var reload = confirm("Jeszcze raz?")

    if (reload === true) {
        obliczanie()
    } else if (reload == false) {
        alert("Koniec")
        break;
    }
    i++
}