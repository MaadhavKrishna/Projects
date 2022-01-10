var word;
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function addUser(){
    player1_name=document.getElementById("player1_input").value;
    player2_name=document.getElementById("player2_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location="quiz_game_page.html";
}

function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    actual_answer=parseInt(num1)*parseInt(num2);

    var question_number="<h4>"+num1+"X"+num2+"</h4>";
    var answer_input="<h4>Answer: <input id='answer_input' type='text' placeholder='Please Enter Answer'></h4>";
    var check="<button onclick='check_answer()' class='btn btn-info'>Check</button>";

    var row=question_number+answer_input+check;

    console.log(row);

    document.getElementById("output_area").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

var question_turn = "player1";
var answer_turn = "player2";

function check_answer() {
    var answer_input = document.getElementById("answer_input").value;
    answer_input = answer_input.toLowerCase();
    console.log(answer_input);
    if (actual_answer == answer_input) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            console.log("p_1="+player1_score);
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            console.log("p_2="+player2_score);
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1_name;
    }
    document.getElementById("output_area").value = "";
}