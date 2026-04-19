const VENTAS_BASE = 5;

function calcularComision(numeroVentas , precioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE){
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;
}

function calcular(){

    //Recuperamos propiedades de la caja de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componenteProducto = document.getElementById("txtPrecio");

    //Recuperamos el valor de las cajas de texto
    let sueldoBaseStr =  componenteSueldoBase.value;
    let numeroVentasStr = componenteVentas.value;
    let precioProductoStr = componenteProducto.value;

    //Convertimos el texto en numeros
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);


    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;


    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}