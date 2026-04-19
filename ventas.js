const VENTAS_BASE = 5;

function calcularComision(numeroVentas , precioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE){
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;
}

function esNumero(valor) {
    return /^[0-9]+$/.test(valor);
}

function validarCampo(idInput, idError) {
    let valor = recuperarTexto(idInput);
    let error = document.getElementById(idError);

    if (valor === "") {
        error.textContent = "Este campo es obligatorio";
        return false;
    }

    if (!esNumero(valor)) {
        error.textContent = "Solo se permiten números";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarSueldoBase() {
    return validarCampo("txtSueldoBase", "errorSueldoBase");
}

function validarVentas() {
    return validarCampo("txtVentas", "errorVentas");
}

function validarPrecio() {
    return validarCampo("txtPrecio", "errorPrecio");
}

function calcular(){

    let v1 = validarSueldoBase();
    let v2 = validarVentas();
    let v3 = validarPrecio();

    if (!v1 || !v2 || !v3){
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}