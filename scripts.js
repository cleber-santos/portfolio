// querySelector vai selecionar qualquer elemento baseado em classes, id`s ou o próprio nome da tag(ex. body).

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')// vai pegar todos elementos com a classe 'card'.

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})