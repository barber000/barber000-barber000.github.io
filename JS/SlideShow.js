$(document).ready(function(){
    inicio();
});

var titulos = ["TAPER FADE", "LOW FADE", "MID FADE", "HIGH FADE", "BURST FADE", "MULLET", "COMB OVER", "BUZZ CUT", "CLASICO","TAPER FADE", "LOW FADE", "MID FADE", "HIGH FADE", "BURST FADE", "MULLET", "COMB OVER", "BUZZ CUT", "CLASICO"];
var descripciones = ["Se caracteriza por tener el cabello muy corto en los lados y la parte posterior de la cabeza, y un cabello ligeramente más largo en la parte superior. ",
 "Un corte donde el cabello está muy recortado en la nuca, patillas y laterales de la cabeza, volviéndose más largo en la parte superior de la misma.",
 "El corte incluye un degradado medio similar al tipo de corte cónico que aterriza por debajo de las sienes y por encima de la oreja.", 
 "Este corte se caracteriza porque en la coronilla se mantiene el pelo bastante largo en contraposición al desvanecido que comienza en la zona alta del cráneo, casi en la línea de raya superior.",
 "Es un corte con un desvanecido semicircular alrededor de las orejas. Este reduce el volumen a los laterales, en forma cóncava, y deja el pelo más largo tanto en la nuca como en la coronilla.",
 "Es un corte de pelo a capas, con una parte frontal y superior corta y la melena más larga por detrás",
 "Se caracteriza por su fleco largo, laterales cortos —usualmente cortados con máquina, a manera de undercut— y por peinarse hacia un lado o hacia atrás.",
 "Este corte podriamos traducirlo como 'Rapado' y se caracteriza porque la longitud del pelo tanto en la parte superior como en los laterales de la cabeza tienen la misma medida de corte.",
 "El corte clásico se caracteriza por ser casi completamente simétrico y de una longitud corta o media, con un ligero desvanecido desde la altura de las sienes hasta la nuca.",
 "Se caracteriza por tener el cabello muy corto en los lados y la parte posterior de la cabeza, y un cabello ligeramente más largo en la parte superior.",
 "Un corte donde el cabello está muy recortado en la nuca, patillas y laterales de la cabeza, volviéndose más largo en la parte superior de la misma.",
 "El corte incluye un degradado medio similar al tipo de corte cónico que aterriza por debajo de las sienes y por encima de la oreja.",
 "Este corte se caracteriza porque en la coronilla se mantiene el pelo bastante largo en contraposición al desvanecido que comienza en la zona alta del cráneo, casi en la línea de raya superior.",
 "Es un corte con un desvanecido semicircular alrededor de las orejas. Este reduce el volumen a los laterales, en forma cóncava, y deja el pelo más largo tanto en la nuca como en la coronilla.",
 "Es un corte de pelo a capas, con una parte frontal y superior corta y la melena más larga por detrás",
 "Se caracteriza por su fleco largo, laterales cortos —usualmente cortados con máquina, a manera de undercut— y por peinarse hacia un lado o hacia atrás.",
 "Este corte podriamos traducirlo como 'Rapado' y se caracteriza porque la longitud del pelo tanto en la parte superior como en los laterales de la cabeza tienen la misma medida de corte.",
 "El corte clásico se caracteriza por ser casi completamente simétrico y de una longitud corta o media, con un ligero desvanecido desde la altura de las sienes hasta la nuca."];

var precios = ["Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18","Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18","Precio: S/. 15","Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18","Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18", "Precio: S/. 18","Precio: S/. 15"];

function inicio(){
    $("body").append("<div id='previewSlideShow'> <div id='imagen'>  <img src='' width='550' height='700'> <div id='titulo'></div> <div id='descripcion'></div>  <div id='precio'></div> <div id='cerrar'><i class='bx bx-x bx-tada'></i></div>       </div></div>");
    
    $("#contendor_imagen_cortes li").on("click", abrirImagen);

    $("#previewSlideShow #cerrar").on("click", cerrarImagen).hover(function() {
        $(this).css("transform", "scale(1.2)");
    }, function() {
        $(this).css("transform", "scale(1)");
    });
    $("#previewSlideShow").on("click", cerrarImagen)

}

function abrirImagen(){
    $("#previewSlideShow").fadeIn();
    var index = $(this).index();
    $("#previewSlideShow img").attr("src", "img/Cortes/imagen" + (index + 1) + ".jpeg");
    $("#previewSlideShow #titulo").text(titulos[index]);
    $("#previewSlideShow #descripcion").text(descripciones[index]);
    $("#previewSlideShow #precio").text(precios[index]);
}

function cerrarImagen(){
    $("#previewSlideShow").fadeOut();
}


