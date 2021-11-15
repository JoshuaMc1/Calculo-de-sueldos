//Desabilitar cajas de texto cuando el documento este listo
$(document).ready(function () {
    dCalculados.txtNombreComp.disabled = true;
    dCalculados.txtDAhorros.disabled = true;
    dCalculados.txtBonificacion.disabled = true;
    dCalculados.txtBonoN.disabled = true;
    dCalculados.txtSeguroPriv.disabled = true;
    dCalculados.txtSeguroSoc.disabled = true;
    dCalculados.txtSueldoNeto.disabled = true;
});

//Cunado se le de click en el boton limpiar
$("#btnLimpiar").click(function () {
    dPersonales.txtIdentidad.value = "";
    dPersonales.txtNombre1.value = "";
    dPersonales.txtNombre2.value = "";
    dPersonales.txtApellidos.value = "";
    dPersonales.txtCorreo.value = "";
    dPersonales.txtSueldoBase.value = "";
    dPersonales.txtFecha.value = "";
    dPersonales.cSeleccionar.selectedIndex = 0;
    //-----------------------------------------
    dCalculados.txtNombreComp.value = "";
    dCalculados.txtDAhorros.value = "";
    dCalculados.txtBonificacion.value = "";
    dCalculados.txtBonoN.value = "";
    dCalculados.txtSeguroPriv.value = "";
    dCalculados.txtSeguroSoc.value = "";
    dCalculados.txtSueldoNeto.value = "";
});

$("#btnImprimir").click(function () {
    print();
});

function validarIdentidad(e) {
    var esc = e.keyCode || e.wich;
    var entrada = String.fromCharCode(esc);
    var validos = "0123456789";
    teclas = "8-37-38-46";
    var t_especial = false;

    for (var i in teclas) {
        if (esc == validos[i]) {
            t_especial = true;
        }
    }
    if (validos.indexOf(entrada) == -1 && !t_especial) {
        return false;
    }
}

function validarDecimal(e, elemento) {
    var entrada = (e.which) ? e.which : event.keyCode
    try {
        if (entrada > 31 && (entrada < 48 || entrada > 57) && !(entrada == 46 || entrada == 8))
            return false;
        else {
            var tam = $(elemento).val().length;
            var index = $(elemento).val().indexOf('.');
            if (index > 0 && entrada == 46) {
                return false;
            }
            if (index > 0) {
                var cadena = (tam + 1) - index;
                if (cadena > 3) {
                    return false;
                }
            }
        }
    } catch (error) {
        alert(`Se a producido un error al ingresar los datos ${error}`);
    }
    return true;
}

$("#btnCalcular").click(function () {
    let boleano = [true,true,true,true,true,true,true,true,true];
    boleano[0] = validarVacio($("#txtIdentidad"));
    boleano[1] = validarVacio($("#txtNombre1"));
    boleano[2] = validarVacio($("#txtNombre2"));
    boleano[3] = validarVacio($("#txtApellidos"));
    boleano[4] = validarVacio($("#txtFecha"));
    boleano[5] = validarVacio($("#txtCorreo"));
    boleano[6] = validarVacio($("#txtSueldoBase"));
    if ($('#opciones').val().trim() === '') {
        boleano[7] = true;
        error($('#opciones'));
    } else {
        boleano[7] = false;
        noError($('#opciones'));
    }
    if ($('input[name="inlineRadioOptions"]').is(':checked')) {
        boleano[8] = false;
        $(".valGen").addClass("d-none");
    }else {
        boleano[8] = true;
        $(".valGen").removeClass("d-none"); 
    }

    if(retornarValidacion(boleano)){
        alert("Ejercutando funcion calcular");
    }else {
        alert("No ejecutando funcion calcular");
    }
});

function retornarValidacion(b){
    if(b[0]==false && b[1]==false && b[2]==false && b[3]==false && b[4]==false && b[5]==false && b[6]==false && b[7]==false && b[8]==false){
        return true;
    }else return false;
}

function validarVacio(p){
    if(p.val().length < 1){
        error(p);
        return true;
    }else{
        noError(p);
        return false;
    }
}

function error(p){
    p.addClass("invalido");
}

function noError(p){
    p.removeClass("invalido");
}