function spr() {
	if(navigator.cookieEnabled == true){
		document.getElementById("demo").innerHTML = "Ciasteczka są"
	} else {
		document.getElementById("demo").innerHTML = "Ciasteczek ni ma"
	}
}

