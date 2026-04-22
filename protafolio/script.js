window.addEventListener("load", function(){
alert("WELCOME");
});


/* MOSTRAR / OCULTAR IMAGEN */
const btnImagen = document.getElementById("btn-imagen");
const imagen = document.getElementById("imagen");

btnImagen.addEventListener("click", function(){

if(imagen.style.display === "none"){
imagen.style.display = "block";
}else{
imagen.style.display = "none";
}

});


const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

boton.addEventListener("click", function(){

if(texto.textContent.trim() === "Allow yourself to dream."){
texto.textContent = "Work for the now.";
}else{
texto.textContent = "Allow yourself to dream.";
}

});