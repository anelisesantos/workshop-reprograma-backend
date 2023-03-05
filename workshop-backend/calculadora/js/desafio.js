var inputValorHora = document.querySelector('#valor-hora');

var inputHorasProjeto = document.querySelector('#horas-projeto');

var spanTotal = document.querySelector('#resposta');

function calcular(){

    var totalProjeto = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);

    spanTotal.textContent = 'R$ ' + totalProjeto;
}