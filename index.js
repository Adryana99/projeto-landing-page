var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var Seta = window.document.getElementById("seta-direita")
var SetaParaEquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Seta.style = "display:none"
    SetaParaEquerda.style = "display:flex; margin-top:55px"    
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    Seta.style = "display:flex; margin-top:55px"
    SetaParaEquerda.style = "display:none"    
}

