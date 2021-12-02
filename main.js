var score=0;
function Update_Score(){
    score = score+1;
    document.getElementById("score").innerHTML= score;
}
function Save_score(){
    localStorage.setItem("score",score);
    
}