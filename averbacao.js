const btn = document.querySelector("#enviar");
let mapa = document.querySelector(".mapa");

btn.addEventListener("click", function(e) {
    e.preventDefault();

//Pega o input da data inserida.
    let data = document.querySelector("#data");

//Transforma o valor em um objeto Date.
    let dataIncorp = new Date(data.value);

    let dataAtual = new Date();

    if(mapa.style.display = "none") {
        mapa.style.display = "block";
    }



                //OCULTAR AS AVERBAÇÕES NÃO SELECIONADAS  

let tipoAverbacao = document.querySelectorAll("input[name='tipoAverbacao']");
let estiloPorTotalDeDias = document.querySelector(".porTotalDeDias");
let estiloPorAnosMesesEDias = document.querySelector(".porAnosMesesEDias");
let estiloPorPeriodoEntreDatas = document.querySelector(".porPeriodoEntreDatas");

let selecionaAverbacao = function(){
    let selecionada = document.querySelector("input[name='tipoAverbacao']:checked").value;
    
    if(selecionada === "porAnosMesesEDias"){
        estiloPorTotalDeDias.style.display = "none";
        estiloPorAnosMesesEDias.style.display = "block";
        estiloPorPeriodoEntreDatas.style.display = "none";
    } else if (selecionada === "porPeriodoEntreDatas"){
        estiloPorTotalDeDias.style.display = "none";
        estiloPorAnosMesesEDias.style.display = "none";
        estiloPorPeriodoEntreDatas.style.display = "block";
    } else {
        estiloPorTotalDeDias.style.display = "block";
        estiloPorAnosMesesEDias.style.display = "none";
        estiloPorPeriodoEntreDatas.style.display = "none";
    }
}

tipoAverbacao.forEach(function(e){
    e.addEventListener("change", selecionaAverbacao);
});

selecionaAverbacao();

//________________________________________________________________



                    //VARIÁVEIS DOS TIPOS DE AVERBAÇÃO

let totalDias = null;
let anosMesesEDias = null;
let periodoEntreDatas = null;


                        //POR TOTAL DE DIAS

totalDias = document.querySelector("#diasInseridos");

            
         //ARMAZENA O TIPO DE AVERBACAO SELECIONADO EM UMA VARIÁVEL

let diasAverbacao = null;


if(totalDias != null) {
    diasAverbacao = totalDias.value;
 } else if(anosMesesEDias != null) {
    diasAverbacao = anosMesesEDias.value;
} else if(periodoEntreDatas != null){
    diasAverbacao = periodoEntreDatas.value;
} else {
    console.log("Preencha alguma averbação!");
}


            //DEFINE PERCENTUAL INICIAL CONSIDERANDO A AVERBAÇÃO

            
let percentualInicial = 60;

let cont = 0;
for(var faixaPercentual = 12045; faixaPercentual > diasAverbacao; faixaPercentual-=1095){   
     
    percentualInicial-=5;
    if(percentualInicial < 10) {percentualInicial = 0;}
    cont++
}

let numTrienios = 11 - cont;


//___________________________________________________________________


                /*DEFINE DATAS DO MTS CONSIDERANDO O 
                PERCENTUAL INICIAL E OS DIAS AVERBADOS*/


let cloneIncorp = new Date(dataIncorp.valueOf());

let calculoDataReferencial = cloneIncorp.setDate(cloneIncorp.getDate() + (1095+1)*(numTrienios+1) - diasAverbacao); 

let dataReferencial = new Date(calculoDataReferencial);

if(percentualInicial == 0){
    console.log(`${percentualInicial + 10}: ${dataReferencial.toLocaleDateString()}`);

    for(var percentual = percentualInicial + 15; percentual <= 60; percentual+= 5) {
        dataReferencial.setDate(dataReferencial.getDate() + 1095);
        console.log(`${percentual}: ${dataReferencial.toLocaleDateString()}`);
    }
} else {
    console.log(`${percentualInicial}: ${dataIncorp.toLocaleDateString()}`);
    console.log(`${percentualInicial + 5}: ${dataReferencial.toLocaleDateString()}`);

    for(var percentual = percentualInicial + 10; percentual <= 60; percentual+= 5) {
        dataReferencial.setDate(dataReferencial.getDate() + 1095);
        console.log(`${percentual}: ${dataReferencial.toLocaleDateString()}`);
    }
}














})


