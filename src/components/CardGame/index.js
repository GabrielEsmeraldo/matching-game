import './style.css'

function CardGame(img = 'alura-pixel', alt = 'Logo Alura'){
    return /*html*/ `
        <article class='card-game'>
            <img src='src/components/CardGame/img/${img}.png' id='${alt}'>
        </article>
    `
}

export default CardGame 