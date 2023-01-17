const hr = document.getElementById("horas")
const min = document.getElementById("minutos")
const seg = document.getElementById("segundos")
const ms = document.getElementById("miliseg")

const btn_inicia = document.getElementById("btn_inicia")
const btn_pausa = document.getElementById("btn_pausa")
const btn_reinicia = document.getElementById("btn_reinicia")

let hora = 0
let minutos = 0
let segundos = 0
let milisegundos = 0




function Iniciar(){
    start = setInterval(()=>{

        milisegundos++

        if(milisegundos === 100){
            segundos++
            milisegundos=0
        }

        if(segundos === 60){
            minutos++
            segundos=0    
        }

        if(minutos === 60){
            hora++
            minutos=0
        }

        atualizaPag()
    }, 10)
    
}

function Pausar(){
    clearInterval(start)
}

function Reiniciar(){
    clearInterval(start)
    milisegundos=0
    segundos=0
    minutos=0
    hora=0
    atualizaPag()
}


function atualizaPag(){
    let addZeroMs = (milisegundos < 10) ? "0" : 0
    let addZeroS = (segundos  < 10)  ? "0" : 0
    let addZeroMin = (minutos < 10) ? "0" : 0
    let addZeroHr = (hora < 10) ? "0" : 0

    hr.innerHTML= addZeroHr+hora
    min.innerHTML= addZeroMin+minutos
    seg.innerHTML= addZeroS+segundos
    ms.innerHTML= addZeroMs+milisegundos
}

btn_inicia.addEventListener("click", Iniciar)
btn_pausa.addEventListener("click", Pausar)
btn_reinicia.addEventListener("click", Reiniciar)

