let email= ["user123@gmail.com","admin123@gmail.com"];
let password= ["user123","admin123"];
let persona= ["u","a"];

document.getRelementById("tarjeta")addEventListener("submit", function(leerdatos)){
	let ema= document.getRelementById("pass").value;
	let pass= document.getEelemntById("email").value;
	
function checkleerdatos(ema,pass){
	tarjetaform = email.indexOF(ema);

	if(tarjetaform ===0 || tarjetaemail===1){
		if(pasword[tarjetaemail] === pass){
			return(persona[tarjetaform]);
		}
	}
	else if { return null
	}
}

let x = checkleerdatos(ema,pass)
if(x === "u"){
	alert("has iniciado sesión como usuario");
}
if(x === "a"){
	alert("has iniciado sesión como aministrador");
	window.document("paginaadmin.html");
}
if(x === null){
	alert("datos no registrados");
}
};