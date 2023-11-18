const btn = document.querySelector("#enviar");
let displayMapa = document.querySelector(".mapa");

btn.addEventListener("click", function(e) {
    e.preventDefault();

//Pega o input da data inserida.
    let data = document.querySelector("#data");

    

//Transforma o valor em um objeto Date.
    const dataIncorp = new Date(data.value);

    const timeZoneOffSet = dataIncorp.getTimezoneOffset();

    dataIncorp.setMinutes(dataIncorp.getMinutes() + timeZoneOffSet);
  
    let dataAtual = new Date();

    if(displayMapa.style.display = "none") {
        displayMapa.style.display = "block";
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

let mapaDatas = [];  
let mapaPercentuais = [];              

let cloneIncorp = new Date(dataIncorp.valueOf());

let calculoDataReferencial = cloneIncorp.setDate(cloneIncorp.getDate() + 1095*(numTrienios+1) - diasAverbacao); 

let dataReferencial = new Date(calculoDataReferencial);


if(percentualInicial == 0){
    mapaDatas.push(dataReferencial.toLocaleDateString().valueOf());

    for(var percentual = percentualInicial + 15; percentual <= 60; percentual+= 5) {
        dataReferencial.setDate(dataReferencial.getDate() + 1095);
        var dataFormatada = dataReferencial.toLocaleDateString();
        mapaDatas.push(dataFormatada.valueOf());
    }
} else {

    mapaDatas.push(dataIncorp.toLocaleDateString(), dataReferencial.toLocaleDateString());
    mapaPercentuais.push(percentualInicial, (percentualInicial+5));

    for(var percentual = percentualInicial + 10; percentual <= 60; percentual+= 5) {
        dataReferencial.setDate(dataReferencial.getDate() + 1095);
        mapaDatas.push(dataReferencial.toLocaleDateString());
        mapaPercentuais.push(percentual);
    }
}


console.log(mapaDatas);

console.log(mapaPercentuais);

                            /*INSERE DATAS NO MAPA*/

let td = document.querySelector("td");

document.querySelector("#data1").innerHTML = mapaDatas[0];
document.querySelector("#data2").innerHTML = mapaDatas[1];
document.querySelector("#data3").innerHTML = mapaDatas[2];
document.querySelector("#data4").innerHTML = mapaDatas[3];
document.querySelector("#data5").innerHTML = mapaDatas[4];
document.querySelector("#data6").innerHTML = mapaDatas[5];
document.querySelector("#data7").innerHTML = mapaDatas[6];
document.querySelector("#data8").innerHTML = mapaDatas[7];
document.querySelector("#data9").innerHTML = mapaDatas[8];
document.querySelector("#data10").innerHTML = mapaDatas[9];
document.querySelector("#data11").innerHTML = mapaDatas[10];


                        /*INSERE PERCENTUAIS NO MAPA*/

document.querySelector("#perc1").innerHTML = mapaPercentuais[0];
document.querySelector("#perc2").innerHTML = mapaPercentuais[1];
document.querySelector("#perc3").innerHTML = mapaPercentuais[2];
document.querySelector("#perc4").innerHTML = mapaPercentuais[3];
document.querySelector("#perc5").innerHTML = mapaPercentuais[4];
document.querySelector("#perc6").innerHTML = mapaPercentuais[5];
document.querySelector("#perc7").innerHTML = mapaPercentuais[6];
document.querySelector("#perc8").innerHTML = mapaPercentuais[7];
document.querySelector("#perc9").innerHTML = mapaPercentuais[8];
document.querySelector("#perc10").innerHTML = mapaPercentuais[9];
document.querySelector("#perc11").innerHTML = mapaPercentuais[10];


//for(mapaLength = 11; )










})


