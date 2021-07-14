function getScore()
{
    score = localStorage.getItem("score");
    document.getElementById("update_score").innerHTML = "<H1> Score: "+score+"</H1>";
}
function Back()
{
    window.location = "saving.html";
}