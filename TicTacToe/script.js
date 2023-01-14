const tiles = document.querySelectorAll('.tile');

const Player_x ='X';
const Player_0 = 'O';

let turn = Player_x
const boardState = Array(tiles.length);

boardState.fill(null);


const strike = document.getElementById('strike');
const endGame = document.getElementById('Game-finished');
const endGameText = document.getElementById('Game-finished-text');
const repeatTheGame = document.getElementById('repeat-the-game');

tiles.forEach((tile) => tile.addEventListener('click', tileClick));

function setHoverText(){
    tiles.forEach(tile =>{
        tile.classList.remove('x-hover');
        tile.classList.remove('o-hover');
    })
    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach((tile)=>{
        if( tile.innerText==''){
            tile.classList.add(hoverClass);
        }
    })
}

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
        boardState[tileNumber - 1] = Player_x;
        turn = Player_x;
    }
    setHoverText();
    checkWinner();
}
function checkWinner(){
    for(const winningCombination of winningCombo){
        const combo = winningCombination.combo;
        const {combo , strikeClass}= winningCombination;
        const tileValue1 = boardState[combo[0]-1];
        const tileValue1 = boardState[combo[1]-1];
        const tileValue1 = boardState[combo[2]-1];
        
    }
}
const winningCombo =[
    {combo:[1,2,3],strikeClass: "strike-row-1"},
    {combo:[4,5,6],strikeClass: "strike-row-2"},
    {combo:[7,8,9],strikeClass: "strike-row-3"},
    {combo:[1,4,7],strikeClass: "strike-column-1"},
    {combo:[2,5,8],strikeClass: "strike-column-2"},
    {combo:[3,6,9],strikeClass: "strike-column-3"},
    {combo:[1,5,9],strikeClass: "strike-diagonal-1"},
    {combo:[3,5,7],strikeClass: "strike-diagonal-2"},

]