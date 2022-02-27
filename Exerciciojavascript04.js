const botao = document.getElementById("botao")
const imagem = document.getElementById("imagem")

botao.addEventListener('click', () => {


    if(botao.innerText === "Turn on") {
        botao.innerText = "Turn off"
        imagem.src = "lampada-acesa-png.png"
    }else{        
        botao.innerText = "Turn on"
        imagem.src = "lampada-apagada-png.png"
     }

})