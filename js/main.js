function comparar(valorGasolina, valorEtanol){
    const comb1 =  parseFloat(document.getElementById("valorGasolina").value);
    const comb2 =  parseFloat(document.getElementById("valorEtanol").value);
    resultadoComparacao = (comb2 / comb1);
    indiceComparacao = 0.7;
    perc = Math.round(resultadoComparacao * 100);


    if (resultadoComparacao <= indiceComparacao) {
        document.getElementById("visor").innerHTML =  ` ${perc}% - É aconselhável você utilizar o Etanol `;
        var imagemCombustivel = document.querySelector("#image");
        imagemCombustivel.setAttribute('src', './img/etanol.jpg');
    } else {
         document.getElementById("visor").innerHTML =  ` ${perc}% - É aconselhável você utilizar a gasolina `;
         var imagemCombustivel = document.querySelector("#image");
         imagemCombustivel.setAttribute('src', './img/gasolina.jpg');
    }
    
}