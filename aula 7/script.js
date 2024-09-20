const DIV = document.querySelector('div')

DIV.addEventListener('mouseenter', entrei)
DIV.addEventListener('mouseout', sai)
DIV.addEventListener('click', clicou)

function entrei() {
    DIV.innerText = 'entrou'
    DIV.style.color = '#fff'
}

function sai() {
    DIV.innerText = 'sai'
    DIV.style.backgroundColor = 'blue'
    DIV.style.fontSize = '20px'
}

function clicou() {
    const butao = document. createElement("button")
    const texto = document.createTextNode("voltar")
    butao.appendChild(texto)
    DIV.appendChild(butao)
}