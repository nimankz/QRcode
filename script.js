'use strict';
const button= document.getElementById('generating-button');
const show_result= document.getElementById("generated-Qrcode");


const clearQR= myname => show_result.innerHTML="";

function generate_QR_code(){
	new QRCode(show_result,{
    text: document.getElementById("URL-input").value,
    width: 300,
    height: 300,
  });
};

function generate_submit(argument) {
	argument.preventDefault();
	clearQR();
	const url= document.getElementById("URL-input").value
	console.log(url);

	if(url ==="")
		alert("please enter a valid url");
	else
		generate_QR_code();
};

button.addEventListener("click", generate_submit);