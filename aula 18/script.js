const NIVEL_DISPLAY = document.querySelector('#nivel')
const VIDAS_DISPLAY = document.querySelector('#vidas')
const MENSAGEM_CONTAINER = document.querySelector('#mensagem')
const MENSAGEM_TEXTO = document.querySelector('#mensagem-texto')
const GAME_CONTAINER = document.querySelector('#game-container')

let nivel = 1
let vidas = 3
let pares_encontrados = 0
let quadrados_virados = []
let bloqueio_clique = false

const NIVEIS = [
    {quadrados: 4, vidas: 3},
    {quadrados: 6, vidas: 4},
    {quadrados: 8, vidas: 5},
    {quadrados: 10, vidas: 6},
    {quadrados: 14, vidas: 7},
]

function iniciar_nivel() {
    const CONFIG = NIVEIS[nivel - 1]
    pares_encontrados = 0
    quadrados_virados = []
    bloqueio_clique = false

    VIDAS_DISPLAY.textContent = vidas
    NIVEL_DISPLAY.textContent = nivel

    GAME_CONTAINER.innerHTML = ''
    GAME_CONTAINER.computedStyleMap.gridTemplateColumns = `repeat(${Math.ceil(CONFIG.quadrados)})`

const NUMEROS = gerar_pares_aleatorios(CONFIG.quadrados)
NUMEROS.forEach(numero >{
    const QUADRADO = document.createElement('div')
    QUADRADO.classList.add('quadrado')
    QUADRADO.dataset.number = numero
     QUADRADO.addEventListener('click', revelar_quadrado)
    GAME_CONTAINER.appendChild(QUADRADO)




})
    
});
}