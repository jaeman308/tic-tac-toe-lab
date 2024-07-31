/*-------------------------------- Constants --------------------------------*/



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

// console.log(squareEls)
// console.log(messageEl)
// console.log(gameBoardEl)
/*-------------------------------- Functions --------------------------------*/
//when the page is loaded i need to initialize it as a empty game board

const init = () => {
    console.log ('app loaded')
    board = ['', '', '', '', '', '', '', '', '', '', ''];
    turn = 'x'; 
    winner= false;
    tie = false;
};
init()
console.log({board,turn,winner,tie})


const render = () => {
};

// access each square through an array and to get  letter in one of the sqrs
const updateBoard = () => {
    board.forEach((square, indx) => {
        square = squareEls[indx];
        console.dir(square)
       

    });
};

updateBoard()
/*----------------------------- Event Listeners -----------------------------*/



//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
