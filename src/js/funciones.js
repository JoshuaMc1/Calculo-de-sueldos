//Desabilitar cajas de texto cuando el documento este listo
$(document).ready(function () {
    $("#txtNombreComp").prop("disabled",true);
    $("#txtDAhorros").prop("disabled",true);
    $("#txtBonificacion").prop("disabled",true);
    $("#txtBonoN").prop("disabled",true);
    $("#txtSeguroPriv").prop("disabled",true);
    $("#txtSeguroSoc").prop("disabled",true);
    $("#txtSueldoNeto").prop("disabled",true);
});
//Cuando se le de click en el boton limpiar
$("#btnLimpiar").click(function () {
    dPersonales.txtIdentidad.value = "";
    dPersonales.txtNombre1.value = "";
    dPersonales.txtNombre2.value = "";
    dPersonales.txtApellidos.value = "";
    dPersonales.txtCorreo.value = "";
    dPersonales.txtSueldoBase.value = "";
    dPersonales.txtFecha.value = "";
    dPersonales.options.selectedIndex = 0;
    //-----------------------------------------
    $("#txtNombreComp").val("");
    $("#txtDAhorros").val("");
    $("#txtBonificacion").val("");
    $("#txtBonoN").val("");
    $("#txtSeguroPriv").val("");
    $("#txtSeguroSoc").val("");
    $("#txtSueldoNeto").val("");
});
//Boton imprimir, muestra un modal
$("#btnImprimir").click(function () {
    print();
});
//Funcion para validar la entrada del numero de identidad
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
//Funcion para validar la entrada de numer decimal
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
//Cuando se le da click en el boton calcular
$("#btnCalcular").click(function () {
    let boleano = [true,true,true,true,true,true,true,true,true];
    boleano[0] = validarVacio($("#txtIdentidad"));
    boleano[1] = validarVacio($("#txtNombre1"));
    boleano[2] = validarVacio($("#txtNombre2"));
    boleano[3] = validarVacio($("#txtApellidos"));
    boleano[4] = validarVacio($("#txtFecha"));
    boleano[5] = validarVacio($("#txtCorreo"));
    boleano[6] = validarVacio($("#txtSueldoBase"));
    if ($("#opciones").val().trim() === '') {
        boleano[7] = true;
        error($("#opciones"));
    } else {
        boleano[7] = false;
        noError($("#opciones"));
    }
    if ($('input[name="inlineRadioOptions"]').is(':checked')) {
        boleano[8] = false;
        $(".valGen").addClass("d-none");
    }else {
        boleano[8] = true;
        $(".valGen").removeClass("d-none"); 
    }

    if(retornarValidacion(boleano)){
        calculos();
    }
});
//Calculos
function calculos(){
    var nombreCompleto = $("#txtNombre1").val()+" "+$("#txtNombre2").val()+" "+$("#txtApellidos").val();
    var deducciones = parseFloat($("#txtSueldoBase").val()) * 0.10;
    var bono = parseFloat($("#txtSueldoBase").val()) * 0.15;
    var bonoNav = 0;
    var seleccion = $("#opciones option:selected").text();
    if(seleccion == "Administrativo") bonoNav = 250.00;
    else if(seleccion == "Conductor") bonoNav = 300.00;
    var seguroP = ((parseFloat($("#txtSueldoBase").val())) - deducciones) * 0.035;
    var seguroS = (parseFloat($("#txtSueldoBase").val())) * 0.04;
    var total = (parseFloat($("#txtSueldoBase").val())) - deducciones - seguroP - seguroS + bono + bonoNav;
    $("#txtNombreComp").val(nombreCompleto);
    $("#txtDAhorros").val(deducciones.toFixed(2));
    $("#txtBonificacion").val(bono.toFixed(2));
    $("#txtBonoN").val(bonoNav.toFixed(2));
    $("#txtSeguroPriv").val(seguroP.toFixed(2));
    $("#txtSeguroSoc").val(seguroS.toFixed(2));
    $("#txtSueldoNeto").val(total.toFixed(2));
}
//Retorna si todos los campos estan llenos o no
function retornarValidacion(b){
    if(b[0]==false && b[1]==false && b[2]==false && b[3]==false && b[4]==false && b[5]==false && b[6]==false && b[7]==false && b[8]==false){
        return true;
    }else return false;
}
//Valida si los campos estan vacios o no y llama a funciones para cambiar el borde
function validarVacio(p){
    if(p.val().length < 1){
        error(p);
        return true;
    }else{
        noError(p);
        return false;
    }
}
//Cambia el borde de los inputs a color rojo si estan vacios
function error(p){
    p.addClass("invalido");
}
//Cambia al color por defecto los inputs si dichos ya cuentan con texto
function noError(p){
    p.removeClass("invalido");
}
//Al dar click en almacenar, los datos se envian a la tabla
$("#btnAlmacenar").click(function () { 
    var arreglo = new Array();
    llenarArreglo(arreglo);
    $('#cuerpo').append('<tr><td>'+arreglo[0]+'</td><td>'+arreglo[1]+'</td><td>'+arreglo[2]+'</td><td>'+arreglo[3]+'</td>'+'<td>'+
    arreglo[4]+'</td>'+'<td>'+arreglo[5]+'</td>'+'<td>'+arreglo[6]+'</td>'+'<td>'+arreglo[7]+'</td>');

});
//Funcion para extraer los datos de los campos en un arreglo
function llenarArreglo(arreglo){
    arreglo.push($("#txtIdentidad").val());
    arreglo.push($("#txtNombreComp").val());
    arreglo.push($("#txtSueldoBase").val());
    arreglo.push($("#txtDAhorros").val());
    arreglo.push($("#txtBonificacion").val());
    arreglo.push($("#txtSeguroSoc").val());
    arreglo.push($("#txtSeguroPriv").val());
    arreglo.push($("#txtSueldoNeto").val());
}