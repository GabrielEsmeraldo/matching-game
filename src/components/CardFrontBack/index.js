import CardGame from "../CardGame"

function CardFrontBack(){
    return /*html*/ `
        ${CardGame()}
        ${CardGame('JavaScript', 'Logo do JavaScript')}
    `
}

export default CardFrontBack