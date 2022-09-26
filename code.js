var boton = document.querySelector("#btn-calcular"),
    div_calcular = document.querySelector("#div-calcular");

boton.addEventListener("click", calculartabla);

function calculartabla() {
    div_calcular.innerHTML = "";
    
    var saldoini = document.querySelector("#id-saldoini").value,
        interes = document.querySelector("#id-interes").value,
        ncuotas = document.querySelector("#id-ncuotas").value,
        abonoacapital = 0,
        saldo = saldoini,
        interesactual;

    interes = parseFloat(interes) / 100;
    var cuota = (saldoini)/((1 - (Math.pow(1 + interes, - ncuotas)))/(interes));

    var table = document.createElement("table"),
        tr1 = document.createElement("tr"),
        h1 = document.createElement("th"),
        h2 = document.createElement("th"),
        h3 = document.createElement("th"),
        h4 = document.createElement("th"),
        h5 = document.createElement("th");
        tr2 = document.createElement("tr"),
        d1 = document.createElement("td"),
        d2 = document.createElement("td"),
        d3 = document.createElement("td"),
        d4 = document.createElement("td"),
        d5 = document.createElement("td");
    
    h1.innerHTML = "No. Cuota";
    h2.innerHTML = "Cuota";
    h3.innerHTML = "Interés";
    h4.innerHTML = "Abono a Capital";
    h5.innerHTML = "Saldo";
    d1.innerHTML = "0";
    d2.innerHTML = "-";
    d3.innerHTML = "-";
    d4.innerHTML = "-";
    d5.innerHTML = saldoini;

    tr1.appendChild(h1);
    tr1.appendChild(h2);
    tr1.appendChild(h3);
    tr1.appendChild(h4);
    tr1.appendChild(h5);
    tr2.appendChild(d1);
    tr2.appendChild(d2);
    tr2.appendChild(d3);
    tr2.appendChild(d4);
    tr2.appendChild(d5);
    table.appendChild(tr1);
    table.appendChild(tr2);

    for (var i = 1; i <= ncuotas; i++) {
        
        interesactual = saldo * interes;
        abonoacapital = cuota - interesactual;
        saldo = saldo - abonoacapital;

        var tr = document.createElement("tr"),
            td1 = document.createElement("td"),
            td2 = document.createElement("td"),
            td3 = document.createElement("td"),
            td4 = document.createElement("td"),
            td5 = document.createElement("td");
        
        td1.innerHTML = i;
        td2.innerHTML = cuota.toFixed(2);
        td3.innerHTML = interesactual.toFixed(2);
        td4.innerHTML = abonoacapital.toFixed(2);
        td5.innerHTML = Math.abs(saldo.toFixed(2));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
    div_calcular.appendChild(table);
}