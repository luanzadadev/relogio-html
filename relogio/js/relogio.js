//dom

const horas = document.querySelector ('#horas')
const minutos = document.querySelector ('#minutos')
const segundos = document.querySelector ('#segundos')


//eventos

setInterval(relogio, 1000)



//função


function relogio(){

    let dia = new Date()

    let h = dia.getHours()
    let m = dia.getMinutes()
    let s = dia.getSeconds()

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s


}

