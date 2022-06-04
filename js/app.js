let ingresos = [
    new Ingreso("Sueldo",57000),
    new Ingreso("Intereses",2350),
]

let egresos = [
    new Egreso("Compra mensual",12800),
    new Egreso("Impuestos",24200),
]

let cargar = () =>{
    mostrarIngresos();
    mostrarEgresos();
    calcularBalance();
}

function mostrarIngresos(){
    let ingresosHTML = `<table>`;
    for(let i of ingresos){
        ingresosHTML +=`<tr><td>${i._descripcion}</td><td>${i._monto}</td></tr>`;
    }
    ingresosHTML += `</table>`;
    document.getElementById("listaIngresos").innerHTML = ingresosHTML;
}

function mostrarEgresos(){
    let egresosHTML = `<table>`;
    for(let e of egresos){
        egresosHTML +=`<tr><td>${e._descripcion}</td><td>-${e._monto}</td></tr>`;
    }
    egresosHTML += `</table>`;
    document.getElementById("listaEgresos").innerHTML = egresosHTML;
}

function agregar(){
    const formulario = document.forms['formu'];
    let tip = formulario.elements['tip'];
    if(tip.value=="+"){
        let nuevoIng = new Ingreso;
        nuevoIng._descripcion = formulario.elements['detalle'].value;
        nuevoIng._monto = formulario.elements['monto'].value;
        ingresos.push(nuevoIng);
        cargar();
    }
    else if(tip.value=="-"){
        let nuevoEgr = new Egreso;
        nuevoEgr._descripcion = formulario.elements['detalle'].value;
        nuevoEgr._monto = formulario.elements['monto'].value;
        egresos.push(nuevoEgr);
        cargar();
    }
}

function calcularBalance(){
    let sumIngresos=0;
    let sumEgresos=0;
    let balance=0;

    for(let i of ingresos){
        sumIngresos += parseInt(i._monto);
    }
    for(let e of egresos){
        sumEgresos += parseInt(e._monto);
    }
    balance = sumIngresos-sumEgresos;
    if(balance<0){
        document.getElementById("texto").innerHTML = "Pérdidas";
        document.getElementById("texto").style.color = 'red';
        document.getElementById("valor").style.color = 'red';
    }
    else if(balance>0){
        document.getElementById("texto").innerHTML = "Ganancias";
        document.getElementById("texto").style.color = 'green';
        document.getElementById("valor").style.color = 'green';
    }
    else if(balance==0){
        document.getElementById("texto").innerHTML = "Equilibrado";
        document.getElementById("texto").style.color = 'white';
        document.getElementById("valor").style.color = 'white';
    }
    return valor.innerHTML = balance.toLocaleString();
}
