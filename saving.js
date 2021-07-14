var points = 0;

function updateScore()
{
    points = points + 1;
    document.getElementById("score").innerHTML = "Score: " + points;
}

function saveScore()
{
    localStorage.setItem("score",points);
}
function nextPage()
{
    window.location = "BackScore.html";
}