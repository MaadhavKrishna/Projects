function addUser(){
    player1_name=document.getElementById("player1_input").value;
    player2_name=document.getElementById("player2_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location="quiz_game_page.html";
}

function send(){
    number1=document.getElementById("num1").value;
    number2=document.getElementById("num2").value;
    actual_answer=parseInt(num1)*parseInt(num2);
    console.log(actual_answer);

    question_number="<h4>"+number1+"X"+number2+"</h4>";
    answer_input="<h4>Answer: <input type='text' placeholder='Please Enter Answer'></h4>";
    check="<button class='btn btn-info'>Check</button>";

    row=question_number+answer_input+check;

    console.log(row);

    document.getElementById("output_area").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}