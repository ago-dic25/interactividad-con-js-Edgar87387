//**** Variables ****//

//****Boton + para mostar imagenes */
var btnPul = document.querySelector(".TERCERA_IMAGEN .round-button");
var imgEvento = document.querySelector(".TERCERA_IMAGEN .Img_Evento");

//**** Boton modo noche ****//
var btnModoNoche = document.getElementById("btnModoNoche");

//*** Boton like ***//
var btnLike = document.getElementById("btnLike");
var likeCount = document.getElementById("likeCount");
var count = 0;

//**** Boton Buscar ****//

var btnBuscar = document.getElementById("btnBuscar");

console.log(btnBuscar);


//**** Galería con hover ****//
var btnSeeAll = document.querySelector(".round-button2"); 
var mainImage = document.getElementById("mainImage");

var imagenes = ["https://media.istockphoto.com/id/840428108/es/foto/empresario-sonriente-con-las-manos-cruzadas.jpg?s=612x612&w=0&k=20&c=1YTyAsRAAdjDNXJz7c8l4G2Ir6yWUqHPEKZmNXyH1Ns=", 
    "https://www.educaciontrespuntocero.com/wp-content/uploads/2022/09/podcast-programas.jpg", "https://i.blogs.es/79c79e/omid-armin-tf-wsmez9ag-unsplash/1366_2000.jpg"];

var index = 0;
var intervalo;
//  Eventos  //

btnPul.addEventListener("click", function() {
    imgEvento.classList.toggle("active");
});

btnModoNoche.addEventListener("click", function() {
    document.body.classList.toggle("modo_noche");
});


btnLike.addEventListener("click", function() {
    count++;
    likeCount.textContent = count;
});


btnBuscar.addEventListener("click", function() {
    var Busqueda = prompt("Ingrese su busqueda:");
    var Tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.textContent.toLowerCase().includes(palabra.toLowerCase())) {
            tarjeta.classList.remove("ocultar");
        } else {
            tarjeta.classList.add("ocultar");
        }
    });
});



btnSeeAll.addEventListener("mouseover", function() {
    intervalo = setInterval(function() {
        index = (index + 1) % imagenes.length;
        mainImage.src = imagenes[index];
    }, 2000); 
});

btnSeeAll.addEventListener("mouseout", function() {
    clearInterval(intervalo);
    mainImage.src = imagenes[0]; 
});