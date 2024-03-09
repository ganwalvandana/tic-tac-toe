const newGame = document.getElementById("newBtn");
const resetGame = document.getElementById("resetBtn");
const message = document.getElementById("msg");
const boxes = document.querySelectorAll(".box");


let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winner();
    })
})

const reset = () => {
    turnO = true;
    enableBoxes();
    message.style.display = "none";
    newGame.style.display = "none";


}

const disableBoxes = () => {
    boxes.forEach((boxes)=> {
        boxes.disabled = true;
    })
}
const enableBoxes = () => {
    boxes.forEach((boxes)=> {
        boxes.disabled = false;
        boxes.innerText = ""
    })
}

const showWinner = (winner) => {
    message.innerText = `Winner is ${winner}`;
    message.style.display = "block";
    newGame.style.display = "inline-block";
    disableBoxes();
}


const winner = () => {
    winningPatterns.forEach((winningPatterns) => {
        // console.log(winningPatterns[0], winningPatterns[1], winningPatterns[2]);
        // console.log(
        //     boxes[winningPatterns[0]].innerText,
        //     boxes[winningPatterns[1]].innerText, 
        //     boxes[winningPatterns[2]].innerText
        // );

        let pos1Value = boxes[winningPatterns[0]].innerText;
        let pos2Value = boxes[winningPatterns[1]].innerText;
        let pos3Value = boxes[winningPatterns[2]].innerText;


        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                // console.log("winn" , pos1Value);
                showWinner(pos1Value);
            }
        }
    })
}



newGame.addEventListener("click", reset);
resetGame.addEventListener("click", reset);