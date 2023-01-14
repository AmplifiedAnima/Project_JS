var tiles = document.querySelectorAll('.tiles');

const Player_x ='X';
const Player_0 = 'O';

let turn = Player_x
const boardState = Array(tiles.length);

boardState.fill(null);


const strike = document.getElementById('strike');
const endGame = document.getElementById('Game-finished');
const endGameText = document.getElementById('Game-finished-text');
const repeatTheGame = document.getElementById('repeat-the-game');

tiles.forEach(tile=> addEventListener('click', tileClick));

function tileClick(event){
    if(endGame.classList.contains('visible')){
        return;
    }
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if(tile.innerText != ''){
        return;
}
    if (turn ===Player_x){
        tile.innerText = Player_x;
        boardState[tileNumber-1] = Player_x;
        turn = Player_0;
    }
}