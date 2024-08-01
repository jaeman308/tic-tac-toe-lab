/*-------------------------------- Constants --------------------------------*/
// need to define winning combos 
const winningCombos = [
    [0,1,2], // row 1
    [3,4,5], // row 2
    [6,7,8], //row 3
    [0,3,6], // column 1
    [1,4,7], //column 2
    [2,5,8], //column 3
    [0,4,8],// diagonal 1
    [2,4,6] // diagonal 2

]

/*---------------------------- Variables (state) ----------------------------*/
//define the trequired variables used to track the status of each 
// part of the game. 

let board = '';
let turn = '';
let winner = '';
let tie = '';

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll ('.sqr');
const  messageEl = document.querySelector ('#message');
const gameBoardEl = document.querySelector('.board')
const squareIndex = document.querySelectorAll('.id')
// console.log(squareEls)
// console.log(messageEl)
// console.log(gameBoardEl)
// console.log(squareIndex)
/*-------------------------------- Functions --------------------------------*/
//when the page is loaded i need to initialize it as a empty game board

const init = () => {
    console.log ('app loaded')
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X'; 
    winner= false;
    tie = false;
    render();
};

init()
// console.log({board,turn,winner,tie})


function render () {
    updateBoard();
    updateMessage();
};

// access each square through an array and to get  letter in one of the sqrs
function updateBoard () {
    board.forEach((square, indx) => {
          if (square === "X") {
            squareEls[indx].textContent = 'X';

        }else if (square === "O") {
            squareEls[indx].textContent = 'O';
        }else {
            // console.dir(squareEls[indx])
            squareEls[indx].textContent = '';
            // console.dir(squareEls[indx])

        }   
    })
};

function updateMessage () {
    if (winner === false && tie === false) {
        if (turn === 'X') {
            messageEl.textContent = "It's X's turn!"
        }else {
            messageEl.textContent = "It's O's turn!"
        }
        
    }
    if (tie === true && winner === false) {
        messageEl.textContent = "Cats Game"
    } 
    if (winner == true && tie === false) {
        if (turn === "X"){
            messageEl.textContent = "Congrulations X is the winner!"
        } else {
            messageEl.textConent = "Congrulations O is the winner"
        }

    }
}
// need to creat a function that will loop over the sqrs and when provided a click place an X or an O
function handleClick (event) {
    // console.log("squared clicked", event.target.id)

    const currentSquareIndex = event.target.id
    // console.log('board element', board[currentSquareIndex])

//is the square full?  
    if((board[currentSquareIndex] === 'X' || board[currentSquareIndex] === 'O') ||  winner) {
        return 
    }
    placePiece (currentSquareIndex)
    checkForWinner(board, winningCombos)
    checkForTie()
    switchPlayerTurn()

    console.log("more work to come in the handle click", {board})

    }

squareEls.forEach ((square, event) => {
    square.addEventListener('click', handleClick)
});

function placePiece (index) {
    if (index >= 0 && index < board.length) {
        board[index] = turn;
       }
    //    console.log(board)
    } 

    
function checkForWinner (board, winningCombos) { 
    for (let i = 0; i < winningCombos.length; i++) {
    const [a,b,c] = winningCombos[i];
    const valueA = board[a];
    const valueB = board[b];
    const valueC= board[c];
    if (valueA !== '' && valueA === valueB && valueA === valueC){
        winner= true;
        break;
    }
}
   return winner;
};

function checkForTie () {
    if (checkForWinner(board, winningCombos)){
        return;
    }
    const emptySpaces = board.includes('');
    tie = !emptySpaces;
   
} 

function switchPlayerTurn() {
    if (checkForWinner(board, winningCombos)) {
        return;
    }
    turn = (turn == 'x') ? 'O' : 'X';
}

function render(){
    updateBoard();
    updateMessage();
}
/*------------------------ ----- Event Listeners   -----------------------------*/

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
