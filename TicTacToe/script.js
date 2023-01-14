const tiles = document.querySelectorAll('.tile');

const Player_x ='X';
const Player_0 = 'O';
let turn = Player_x;
const boardState = Array(tiles.length);

boardState.fill(null);


const strike = document.getElementById('strike');
const endGame = document.getElementById('game-over-area');
const endGameText = document.getElementById('game-over-text');
const repeatTheGame = document.getElementById('play-again');
repeatTheGame.addEventListener('click', startNewGame);

tiles.forEach((tile) => tile.addEventListener('click', tileClick));

function setHoverText(){
    tiles.forEach((tile) =>{
        tile.classList.remove('x-hover');
        tile.classList.remove('o-hover');
    });

    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach((tile)=>{
        if( tile.innerText==''){
            tile.classList.add(hoverClass);
        }
    });
}
setHoverText();

function tileClick(event){
    if(endGame.classList.contains('visible')){
        return;
    }
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText != ''){
        return;
    }
    if (turn === Player_x){
        tile.innerText = Player_x;
        boardState[tileNumber - 1] = Player_x;
        turn = Player_0;
    }else{
        tile.innerText = Player_0;
        boardState[tileNumber - 1] = Player_0;
        turn = Player_x;
    }
    setHoverText();
    checkWinner();
}
function checkWinner(){
  for (const winningCombination of winningCombinations) {
    const { combo, strikeClass } = winningCombination;
        const tileValue1 = boardState[combo[0] - 1];
        const tileValue2 = boardState[combo[1] - 1];
        const tileValue3 = boardState[combo[2] - 1];
        if (
        tileValue1 !=  null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
        ) {
        strike.classList.add(strikeClass);
        gameOverScreen(tileValue1);
        return;
        }
    }
        const allTileFilledIn = boardState.every((tile) => tile !== null);
        if (allTileFilledIn) {
        gameOverScreen(null);
        }
    }


function gameOverScreen(endGameText){
    let text = 'draw!'
    if(endGameText != null){
        text= `winner is ${endGameText}`;
    }
    endGame.className = 'visible';
    endGameText.innerText= text;
}
function startNewGame() {
    strike.className = "strike";
    endGame.className = "hidden";
    boardState.fill(null);
    tiles.forEach((tile) => (tile.innerText = ""));
    turn = Player_x;
    setHoverText();
  }
const winningCombinations =[
    {combo:[1,2,3],strikeClass: "strike-row-1"},
    {combo:[4,5,6],strikeClass: "strike-row-2"},
    {combo:[7,8,9],strikeClass: "strike-row-3"},
    {combo:[1,4,7],strikeClass: "strike-column-1"},
    {combo:[2,5,8],strikeClass: "strike-column-2"},
    {combo:[3,6,9],strikeClass: "strike-column-3"},
    {combo:[1,5,9],strikeClass: "strike-diagonal-1"},
    {combo:[3,5,7],strikeClass: "strike-diagonal-2"},

];