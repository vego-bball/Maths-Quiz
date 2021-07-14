player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");
Player1score = 0;
Player2score = 0;
document.getElementById("player1_name").innerHTML = player1name + ": ";
document.getElementById("player2_name").innerHTML = player2name + ": ";
document.getElementById("player1_score").innerHTML = Player1score;
document.getElementById("player2_score").innerHTML = Player2score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function Send()
{
    getNum1 = document.getElementById("number1").value;
    getNum2 = document.getElementById("number2").value;
    number_answer = getNum2 * getNum1;
    question = "<h4 id = 'number_display'> Q.  "+getNum1+" x "+getNum2+"</h4>";
    input_box = "<br>Answer: <input type = 'number' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    timer = setInterval(myTimer,1000);
    myTimer();
}


question_turn = "Player 1";
answer_turn = "Player 2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer;
    if (answer == number_answer)
    {
        if (answer_turn == "Player 1")
        {
            Player1score = Player1score + 1;
            document.getElementById("player1_score").innerHTML = Player1score;
        }
        else 
        {
            Player2score = Player2score + 1;
            document.getElementById("player2_score").innerHTML = Player2score;
        }
    }
    if (question_turn == "Player 1")
    {
        question_turn = "Player 2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
    else
    {
        question_turn = "Player 1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
    if (answer_turn == "Player 2")
    {
        answer_turn = "Player 1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }
    else
    {
        answer_turn = "Player 2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }

    document.getElementById("output").innerHTML = "";
    if (Player1score == 10)
    {
    window.location = "win1.html";
    }
    if (Player2score == 10)
    {
    window.location = "win2.html";
    }
}


var counter = 10;
function myTimer()
{
    document.getElementById("timer").innerHTML = counter+" Seconds Left";
    counter--;
    if (counter == -1)
    {
        clearInterval(timer);
        alert("Time is up!");
        check();
        resetTimer();
    }
}

function resetTimer()
{
    counter = 10;
    myTimer();
}