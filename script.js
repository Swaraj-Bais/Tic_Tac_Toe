const elem = document.querySelectorAll(".button");
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let turn = true;
let move=0;
let con;
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", () => {
        if (elem[i].innerText !== "") return;
        if (turn) {
            elem[i].innerText = "O";
            turn = false;
            move++;
        } else {
            elem[i].innerText = "X";
            turn = true;
            move++;
        }
        elem[i].disabled = true;
        con=logic();
        if(!con && move === 9){
            movee();
        }
    });
}
function movee(){
    if(move===9){
        document.querySelector('.container2 h1').innerText='ITS A DRAW!!';
        document.querySelector('.container2').style.display = 'flex';
        document.querySelector('.container').style.display = 'none';
    }
}
let player;
function logic() {
    for (let val of win) {
        if (
            elem[val[0]].innerText !== "" &&
            elem[val[1]].innerText !== "" &&
            elem[val[2]].innerText !== ""
        ) {
            if (
                (elem[val[0]].innerText === "X" &&
                    elem[val[1]].innerText === "X" &&
                    elem[val[2]].innerText === "X") ||
                (elem[val[0]].innerText === "O" &&
                    elem[val[1]].innerText === "O" &&
                    elem[val[2]].innerText === "O")
            ) {
                player=elem[val[0]].innerText;
                displayy(player);
                return true;
            }
        }
    }
    return false;
}
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    resetting();
});
function resetting() {
    elem.forEach((val) => {
        val.innerText = "";
        val.disabled = false;
    });
    turn = true;
    move=0;
}
function displayy(player){
    document.querySelector('.container2 h1').innerText=`PLAYER WITH '${player}' IS WIN!! `;
    document.querySelector('.container2').style.display='flex';
    document.querySelector('.container').style.display='none';

}
document.querySelector('#new').addEventListener('click',()=>{
    document.querySelector('.container2').style.display='none';
document.querySelector('.container').style.display='block';
resetting();
});