const questions=[
    'If you accidentally kill your friend, would you take the blame?', 
    'Would you be happy if someone throws you surprise party?',
    'What do you think about dentists dressed up as clowns for kids?',
    'Do you ever feel like the fault behind everything?',
    'How do you feel about honeydew?'
];
let score=0;
let index=0;
console.log(index);
window.onload=function(){
    document.getElementById("question").innerText=questions[index];
    index++;
}
function gameEnd(){
    document.getElementById("questions").style.display="none";
    if(score<4){
        document.getElementById("question").innerText="You are a solid Mr. Peanutbutter! Erika!";
        document.getElementById("end-image").src="assets/img/pb.jpg";
        
    }
    else if(score<8){
        document.getElementById("question").innerText="You are quite a Diane. :/";
        document.getElementById("end-image").src="assets/img/diane.jpg";
    }
    else{
        document.getElementById("question").innerText="It isn't this healthy to be so similar to Bojack, you know.";
        document.getElementById("end-image").src="assets/img/bj.jpg";
    }
}


function nextQuestion(){
    document.getElementById("question").innerText=questions[index];
    index++;

    if(index==5){
        gameEnd();
    }

}
document.getElementById("submit-answer").onclick=function(){
    var vals=document.getElementsByName("radio-button");
    
    if(vals[0].checked){
        score-=2;
        vals[0].checked=false;
    }  
    else if(vals[1].checked){
        score+=1;
        vals[1].checked=false;
    } 
    else if(vals[2].checked){
        score+=4;
        vals[2].checked=false;
    }
    console.log(score);
    nextQuestion();
}

