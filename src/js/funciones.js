$(document).ready(function () {
    dCalculados.txtNombreComp.disabled = true;
    dCalculados.txtDAhorros.disabled = true;
    dCalculados.txtBonificacion.disabled = true;
    dCalculados.txtBonoN.disabled = true;
    dCalculados.txtSeguroPriv.disabled = true;
    dCalculados.txtSeguroSoc.disabled = true;
    dCalculados.txtSueldoNeto.disabled = true;
});

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

function NumCheck(e, field) {
    key = e.keyCode ? e.keyCode : e.which
    // backspace
    if (key == 8) return true
    // 0-9
    if (key > 47 && key < 58) {
        if (field.value == "") return true
        regexp = /.[0-9]{2}$/
        return !(regexp.test(field.value))
    }
    // .
    if (key == 46) {
        if (field.value == "") return false
        regexp = /^[0-9]+$/
        return regexp.test(field.value)
    }
    // other key
    return false
}