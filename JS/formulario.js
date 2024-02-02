function revisar(elemento) {
    if (elemento.value === "") {
        elemento.className = "error";
    } else {
        elemento.className = "input";
    }
}

function revisarNumero(elemento) {
    if (elemento.value !== "") {
        var data = elemento.value;
        if (isNaN(data)) {
            elemento.className = "error";
        } else {
            elemento.className = "input";
        }
    }
}

function revisarLongitudTelefono(elemento, min, max) {
    if (elemento.value !== "") {
        var data = elemento.value;
        if (data.length < min || data.length > max || data.length == 8) {
            elemento.className = "error";
        } else {
            elemento.className = "input";
        }
    }
}

function revisarCorreo(elemento) {
    if (elemento.value !== "") {
        var data = elemento.value;
        var exp = /^[\w]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!exp.test(data)) {
            elemento.className = "error";
        } else {
            elemento.className = "input";
        }
    }
}

function revisarTexto(elemento) {
    if (elemento.value !== "") {
        var data = elemento.value;
        var exp = /^([A-ZÁÉÍÓÚÑa-záéíóúñ']+[\s]*)+$/;
        if (!exp.test(data)) {
            elemento.className = "error";
        } else {
            elemento.className = "input";
        }
    }
}

function validar() {
    var datoscorrectos = true;
    var error = "";

    if (document.getElementById("nombre").value === "") {
        datoscorrectos = false;
        error += "<br> El nombre está vacío";
    }

    var exp = /^([A-ZÁÉÍÓÚÑa-záéíóúñ']+[\s]*)+$/;
    if (!exp.test(document.getElementById("nombre").value)) {
        datoscorrectos = false;
        error += "<br>Nombres y apellidos deben empezar con mayúscula; además verifique que no presenta caracteres especiales como @,%,$, etc.";
    }

    if (document.getElementById("email").value === "") {
        datoscorrectos = false;
        error += "<br> El email está vacío";
    }

    var exp = /^[\w]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!exp.test(document.getElementById("email").value)) {
        datoscorrectos = false;
        error += "<br> El email no es válido";
    }

    if (document.getElementById("telefono").value === "") {
        datoscorrectos = false;
        error += "<br> El teléfono está vacío";
    }

    if (isNaN(document.getElementById("telefono").value)) {
        datoscorrectos = false;
        error += "<br> El teléfono sólo acepta números";
    }

    if (document.getElementById("telefono").value.length !== 9) {
        datoscorrectos = false;
        error += "<br> El teléfono debe tener 9 dígitos";
    }

    if (document.getElementById("mensaje").value === "") {
        datoscorrectos = false;
        error += "<br> El mensaje está vacío";
    }

    if (!datoscorrectos) {
        alert("Hay errores en el formulario " + error);
        swal("Verifica ingreso", "Hay errores en el formulario: <br>" + error, "error");
    }

    return datoscorrectos;
}
