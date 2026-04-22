window.addEventListener("load", () => {
    alert("WELCOME");
});


const boton = document.getElementById("btn-imagen");
const imagen = document.getElementById("imagen");

if (boton && imagen) {

    boton.addEventListener("click", () => {

        if (imagen.style.display === "none") {
            imagen.style.display = "block";
        } else {
            imagen.style.display = "none";
        }

    });

}

