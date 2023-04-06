export const cardDotes = document.querySelectorAll('.dote')
export const dotesItems = document.querySelectorAll('.cards__dotes-item')
export const cardSubtitle = document.getElementById('card__subtitle')
export const cardText = document.getElementById('card__text')
export const cardImg = document.querySelector('.cards__img')


export const eventoClick = cardDotes.forEach((dote,i)=>{
    dote.addEventListener("click",(e)=>{
        dotesItems.forEach((dotee,i)=>{
            dotee.classList.remove('cards__dotes-item--active')
        })
        if(e.target.id == "dote-1"){
            dotesItems[0].classList.add("cards__dotes-item--active")
            cardSubtitle.innerHTML = "Entrenamientos"
            cardText.innerHTML = "Deja claro en que se enfocan tu proceso y ejercicios"
            cardImg.setAttribute('src','./assets/backgrounds/cards/entrenamientos.png')
        } else if(e.target.id == "dote-2"){
            dotesItems[i].classList.add("cards__dotes-item--active")
            cardSubtitle.innerHTML = "Categorias"
            cardText.innerHTML = "Se mostraran los diferentes grupos de edades con los que se trabajan"
            cardImg.setAttribute('src','./assets/backgrounds/cards/categorias.png')
        } else if(e.target.id == "dote-3"){
            dotesItems[i].classList.add("cards__dotes-item--active")
            cardSubtitle.innerHTML = "Entrenador / staff"
            cardText.innerHTML = "Presenta al cuerpo ténico con su trayectoria o vision del basketball"
            cardImg.setAttribute('src','./assets/backgrounds/cards/couch.png')
        } else if(e.target.id == "dote-4"){
            dotesItems[i].classList.add("cards__dotes-item--active")
            cardSubtitle.innerHTML = "Ubicacion de cancha"
            cardText.innerHTML = "Se inserta un mapa de google maps para mostrar la direccion de los entrenamientos"
            cardImg.setAttribute('src','./assets/backgrounds/cards/cancha.png')
        } else if(e.target.id == "dote-5"){
            dotesItems[i].classList.add("cards__dotes-item--active")
            cardSubtitle.innerHTML = "Horarios"
            cardText.innerHTML = "Informa sobre los horarios en los cuales se entrenan y la duración de estos"
            cardImg.setAttribute('src','./assets/backgrounds/cards/horarios.png')
        } else {
            dotesItems[i].classList.add("cards__dotes-item--active")
            cardSubtitle.innerHTML = "Link sociales"
            cardText.innerHTML = "Redireccion a Facebook, instagram y WhatsApp para ser contactado"
            cardImg.setAttribute('src','./assets/backgrounds/cards/redes-sociales.png')
        }

    })
})