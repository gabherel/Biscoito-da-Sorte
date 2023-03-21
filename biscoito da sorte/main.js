// variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnOpen = document.querySelector('#btnOpen')
const firstImage = document.querySelector('#firstImage')

let phrase = document.querySelector('#lucky')
let phrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu',
  'Aquele que foge do seu destino acaba indo de encontro a ele...',
  'Se você plantar um pessegueiro terá pêssegos, você pode querer uma maça ou uma laranja, mas mesmo assim terá pêssegos.',
  'O ontem é história, o amanhã é um mistério, mas hoje é uma dádiva, por isso chama-se presente.',
  'A mente é como a água, quando fica agitada não se pode ver claramente, mas se permitir que se acalme, a resposta fica clara.'
]

// eventos
firstImage.addEventListener('click', toggleScreen)
btnOpen.addEventListener('click', sortPhrases)

// funções
function getRandomNumber() {
  let result = Math.round(Math.random(phrases.length) * 5)

  return result
}

function sortPhrases() {
  let index = getRandomNumber()
  phrase.innerText = phrases[index]
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
