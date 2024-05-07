let email= ["user123@gmail.com","admin123@gmail.com"];
let password= ["user123","admin123"];
let persona= ["u","a"];

document.getElementById("tarjeta").addEventListener("submit", function(event){
	event.preventDefault()
	console.log("lo lograste papito")
	let ema= document.getElementById("email").value;
	let pass= document.getElementById("pass").value;

	console.log(ema+pass)
function checkleerdatos(ema,pass){
	let tarjetaform = email.indexOf(ema);

	if(tarjetaform === 0 || tarjetaform=== 1){
		if(password[tarjetaform] === pass){
			return(persona[tarjetaform]);
		}
	}
	else  return null
};

let x = checkleerdatos(ema,pass)
if(x === "u"){
	alert("has iniciado sesión como usuario");
}
if(x === "a"){
	alert("has iniciado sesión como aministrador");
	window.document("paginaadmin.html");
}
if(x == null){
	alert("datos no registrados");
}
});