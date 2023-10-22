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
let cloneIncorp = new Date(dataIncorp.valueOf());
//let formataData = cloneIncorp.toLocaleDateString();


                        //POR TOTAL DE DIAS

totalDias = document.querySelector("#diasInseridos");


cloneIncorp.setDate(cloneIncorp.getDate() + parseInt(totalDias.value) + 1);

//console.log(`Com averbação: ${cloneIncorp}`);

//let somaAverbacoes = totalDias + anosMesesEDias + periodoEntreDatas;


            //DEFINE PERCENTUAL INICIAL COMPUTANDO A AVERBAÇÃO

 let dataIncorporacao = new Date(1992, 8, 5);
 //let formataData = dataIncorporacao.toLocaleDateString();

 //console.log(dataIncorporacao);
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

let percentualInicial;

if(diasAverbacao >= 1095*11){
    percentualInicial = '60%';
}else if(diasAverbacao >= 1095*10){
    percentualInicial = '55%';
}else if(diasAverbacao >= 1095*9){
    percentualInicial = '50%';
}else if(diasAverbacao >= 1095*8){
    percentualInicial = '45%';
}else if(diasAverbacao >= 1095*7){
    percentualInicial = '40%';
}else if(diasAverbacao >= 1095*6){
    percentualInicial = '35%';
}else if(diasAverbacao >= 1095*5){
    percentualInicial = '30%';
}else if(diasAverbacao >= 1095*4){
    percentualInicial = '25%';
}else if(diasAverbacao >= 1095*3){
    percentualInicial = '20%';
}else if(diasAverbacao >= 1095*2){
    percentualInicial = '15%';
}else if(diasAverbacao >= 1095){
    percentualInicial = '10%';
}else{
    percentualInicial = '0%';
}

//console.log(`O percentual inicial será: ${percentualInicial}`);


//___________________________________________________________________


        //DEFINE DATAS DO MTS CONSIDERANDO OS DIAS AVERBADOS

let soma;
let resultado;

switch(percentualInicial) {
    case '0%':
        //soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + 1095 - diasAverbacao);

        soma = cloneIncorp.setDate(cloneIncorp.getDate() + 1095 - parseInt(diasAverbacao));

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '10%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*2) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();

        //console.log(resultado);
        break;
    case '15%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*3) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();

        console.log(resultado);
        break;
    case '20%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*4) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '25%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*5) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '30%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*6) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '35%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*7) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '40%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*8) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '45%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*9) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '50%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*10) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '55%':
        soma = dataIncorporacao.setDate(dataIncorporacao.getDate() + (1095*11) - diasAverbacao);

        resultado = new Date(soma).toLocaleDateString();
        
        console.log(resultado);
        break;
    case '60%':
        console.log(`Percentual máximo atingido`);
        break;


}

})