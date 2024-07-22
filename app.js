
function calcularUnidadeTemp() {
    let valor = document.getElementById('input-valor-temp').value;
    let selectTemp = document.getElementById('select-temp').value;
    let resultadoTemp = document.getElementById('P-resultado-temp');

    if (valor !== '') {
      if (selectTemp === 'celsius') {
        resultadoTemp.textContent = (Number(valor) + 32);
    } else if (selectTemp === 'fahreinheit') {
    resultadoTemp.textContent = (Number(valor) - 32);
    } } else {
        alert ('Insira um valor!');
}

}

function calcularUnidadeComp() {
    let valor = document.getElementById('input-valor-comp').value;
    let selectComp = document.getElementById('select-comp').value;
    let resultadoComp = document.getElementById('P-resultado');

    if (valor !== '') {
      if (selectComp === 'metros') {
        resultadoComp.textContent = (Number(valor) * 3.28);
    } else if (selectComp === 'pes') {
    resultadoComp.textContent = (Number(valor) / 3.28);
    } } else {
        alert ('Insira um valor!');
}

}

function calcularUnidadePeso() {
    let valor = document.getElementById('input-valor-peso').value;
    let selectPeso = document.getElementById('select-peso').value;
    let resultadoPeso = document.getElementById('P-resultado-peso');

    if (valor !== '') {
      if (selectPeso === 'quilograma') {
        resultadoPeso.textContent = (Number(valor) * 2.20);
    } else if (selectPeso === 'libra') {
    resultadoPeso.textContent = (Number(valor) / 2.20);
    } } else {
        alert ('Insira um valor!');
}

}