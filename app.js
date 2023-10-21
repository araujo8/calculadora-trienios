const btn = document.querySelector("#enviar");
let mapa = document.querySelector(".mapa");
//let linha10 = document.querySelector("#linha10");


btn.addEventListener("click", function(e) {
    
    e.preventDefault();

    const data = document.querySelector("#incorp"); //Pega o input da data inserida.
   
    const dataIncorp = new Date(data.value); //Transforma o valor em um objeto Date.

    let dataAtual = new Date(); //Pega a data atual.

    if(mapa.style.display = "none") { 
        mapa.style.display = "block"; //Deixa o mapa invisível.
    } 

    

//DEFINE OS PERCENTUAIS

    //10%
    let data10 = new Date(dataIncorp.valueOf());

    data10.setDate(data10.getDate() + 1095+1); 

    if (ehMaior(data10, dataAtual) == data10) {
        linha10.style.display = "none";
    } else {
        document.getElementById("perc10").innerHTML = data10.toLocaleDateString();
    }

    //15%
    let data15 = new Date(dataIncorp.valueOf());

    data15.setDate(data15.getDate() + (1095*2)+1); 

    if (ehMaior(data15, dataAtual) == data15) {
        linha15.style.display = "none";
    } else {
        document.getElementById("perc15").innerHTML = data15.toLocaleDateString();
    }

    //20%

    let data20 = new Date(dataIncorp.valueOf());

    data20.setDate(data20.getDate() + (1095*3)+1);

    if (ehMaior(data20, dataAtual) == data20) {
        linha20.style.display = "none";
    } else {
        document.getElementById("perc20").innerHTML = data20.toLocaleDateString();
    }


    //25%

    let data25 = new Date(dataIncorp.valueOf());

    data25.setDate(data25.getDate() + (1095*4)+1);

    if (ehMaior(data25, dataAtual) == data25) {
        linha25.style.display = "none";
    } else {
        document.getElementById("perc25").innerHTML = data25.toLocaleDateString();
    }

    //30%

    let data30 = new Date(dataIncorp.valueOf());

    data30.setDate(data30.getDate() + (1095*5)+1);

    if (ehMaior(data30, dataAtual) == data30) {
        linha30.style.display = "none";
    } else {
        document.getElementById("perc30").innerHTML = data30.toLocaleDateString();
    }

    //35%

    let data35 = new Date(dataIncorp.valueOf());

    data35.setDate(data35.getDate() + (1095*6)+1);

    if (ehMaior(data35, dataAtual) == data35) {
        linha35.style.display = "none";
    } else {
        document.getElementById("perc35").innerHTML = data35.toLocaleDateString();
    }

    //40%

    let data40 = new Date(dataIncorp.valueOf());

    data40.setDate(data40.getDate() + (1095*7)+1);

    if (ehMaior(data40, dataAtual) == data40) {
        linha40.style.display = "none";
    } else {
        document.getElementById("perc40").innerHTML = data40.toLocaleDateString();
    }

    //45%

    let data45 = new Date(dataIncorp.valueOf());

    data45.setDate(data45.getDate() + (1095*8)+1);

    if (ehMaior(data45, dataAtual) == data45) {
        linha45.style.display = "none";
    } else {
        document.getElementById("perc45").innerHTML = data45.toLocaleDateString();
    }

    //50%

    let data50 = new Date(dataIncorp.valueOf());

    data50.setDate(data50.getDate() + (1095*9)+1);

    if (ehMaior(data50, dataAtual) == data50) {
        linha50.style.display = "none";
    } else {
        document.getElementById("perc50").innerHTML = data50.toLocaleDateString();
    }

    //55%

    let data55 = new Date(dataIncorp.valueOf());

    data55.setDate(data55.getDate() + (1095*10)+1);

    if (ehMaior(data55, dataAtual) == data55) {
        linha55.style.display = "none";
    } else {
        document.getElementById("perc55").innerHTML = data55.toLocaleDateString();
    }

    //60%

    let data60 = new Date(dataIncorp.valueOf());

    data60.setDate(data60.getDate() + (1095*11)+1);

    if (ehMaior(data60, dataAtual) == data60) {
        linha60.style.display = "none";
    } else {
        document.getElementById("perc60").innerHTML = data60.toLocaleDateString();
    }

   
   

})

