function addUser()
{
    Name1 = document.getElementById("player1_name_input").value;
    Name2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",Name1);
    localStorage.setItem("player2_name",Name2);
    window.location = "game_page.html"; 
}