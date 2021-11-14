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
    dPersonales.txtNombre1.value ="";
    dPersonales.txtNompre2.value = "";
    dPersonales.txtApellidos.value = "";
    //dPersonales.txtFecha;
    //dPersonales.inlineRadioOptions;
    dPersonales.txtCorreo.value = "";
    dPersonales.txtSueldoBase.value = "";
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