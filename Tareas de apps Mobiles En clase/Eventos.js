//**** Variables ****//

var btnBuscar = document.getElementById("btnBuscar");

//****Boton + para mostar imagenes */
var btnPul = document.querySelector(".TERCERA_IMAGEN .round-button");
var imgEvento = document.querySelector(".TERCERA_IMAGEN .Img_Evento");

//**** Boton modo noche ****//
var btnModoNoche = document.getElementById("btnModoNoche");

// Boton See all post  //
var btnSeeAll = document.getElementById("btnSeeAll");
var submenu = document.querySelector(".submenu");

console.log(btnBuscar);

//  Eventos  //

btnBuscar.addEventListener("click", function() {
    alert("Boton Buscar presionado");
});

btnPul.addEventListener("click", function() {
    imgEvento.classList.toggle("active");
});

btnModoNoche.addEventListener("click", function() {
    document.body.classList.toggle("modo_noche");
});
