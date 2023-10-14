//Add Event Listener to all the Boxes

var boxNumber = document.getElementsByClassName("box")

let count = 0
let input = 'X'

for (let i=0; i<boxNumber.length; i++) {
    boxNumber[i].addEventListener('click', fillInput )
}

function fillInput(e) {
    if (!e.target.innerText) {
        count++
        input = input=='X'? 'O':'X' 
        e.target.innerHTML = `<h2> ${input} </h2>`

        updateScore()
    }
}


//score Comparision

function updateScore() {
    if (boxNumber[0].innerText + boxNumber[1].innerText + boxNumber[2].innerText == "XXX" ||
    boxNumber[3].innerText + boxNumber[4].innerText + boxNumber[5].innerText == "XXX" ||
    boxNumber[6].innerText + boxNumber[7].innerText + boxNumber[8].innerText == "XXX" ||
    boxNumber[0].innerText + boxNumber[3].innerText + boxNumber[6].innerText == "XXX" ||
    boxNumber[1].innerText + boxNumber[4].innerText + boxNumber[7].innerText == "XXX" ||
    boxNumber[2].innerText + boxNumber[5].innerText + boxNumber[8].innerText == "XXX" ||
    boxNumber[0].innerText + boxNumber[4].innerText + boxNumber[8].innerText == "XXX" ||
    boxNumber[2].innerText + boxNumber[4].innerText + boxNumber[6].innerText == "XXX")
    
    {
        
        showResult(" 'X' Won the Game!")
    }


    else if (boxNumber[0].innerText + boxNumber[1].innerText + boxNumber[2].innerText == "OOO" ||
    boxNumber[3].innerText + boxNumber[4].innerText + boxNumber[5].innerText == "OOO" ||
    boxNumber[6].innerText + boxNumber[7].innerText + boxNumber[8].innerText == "OOO" ||
    boxNumber[0].innerText + boxNumber[3].innerText + boxNumber[6].innerText == "OOO" ||
    boxNumber[1].innerText + boxNumber[4].innerText + boxNumber[7].innerText == "OOO" ||
    boxNumber[2].innerText + boxNumber[5].innerText + boxNumber[8].innerText == "OOO" ||
    boxNumber[0].innerText + boxNumber[4].innerText + boxNumber[8].innerText == "OOO" ||
    boxNumber[2].innerText + boxNumber[4].innerText + boxNumber[6].innerText == "OOO")

    {

        showResult(" 'O' Won the Game!")
    }


    else if (count==9) {
        
        showResult(" Game is Draw! ")
    }

}


//Display Result
var result = document.getElementById("result")
var popup = document.getElementById("popup")

function showResult(outcome){
    popup.style.display='flex';
    result.innerText = outcome
}


//PLay Again 
var button = document.getElementById("button")

button.addEventListener('click', ()=> {
    window.location.reload()
})