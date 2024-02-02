let tabInicial = 1;

$(document).ready(function(){
    principal();
})

function principal(){
    $("#tabs a").on("click",abriTab);
    $(".tabContent").eq(tabInicial - 1).fadeIn();
    $("#tabs a").eq(tabInicial - 1).addClass("tabActual");
}

function abriTab(){
    $(".tabContent").hide();
    $("#tabs a").removeClass("tabActual")
    $(".tabContent").eq($(this).index()).fadeIn("slow");
    $(this).addClass("tabActual");
    return false;
}