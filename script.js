
    var imie = document.getElementById("imie").checked;

    function WypiszImie() {
        var a = prompt("Imię?");
        document.getElementById("demo").innerHTML="Witaj " + a;
    }

    function WypiszDate() {
        var data = Date();
        document.getElementById("demo").innerHTML = data;
    }

    function WypiszLiczba() {
        var numer = parseInt(document.getElementById("numer").value);
        document.getElementById("demo").innerHTML = numer+6;
    }


    WypiszLiczba()


