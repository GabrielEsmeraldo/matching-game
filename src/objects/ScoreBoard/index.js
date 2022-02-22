import PlayerName from "../../components/PlayerName"
import vsPlayer from "../../components/vsPlayer"
import '../ScoreBoard/style.css'

function ScoreBoard(){
    return /*html*/`
        <header class='score-board'>
            ${PlayerName('Player 1')}
            ${vsPlayer()}
            ${PlayerName('Player 2')}
        </header>
    `
}

export default ScoreBoard