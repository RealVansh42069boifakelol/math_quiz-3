function Login()
{
    var player1Username = document.getElementById("player1Name").value;
    var player2Username = document.getElementById("player2Name").value;

    localStorage.setItem("player1's name", player1Username);
    localStorage.setItem("player2's name", player2Username);

    window.location = "index.html";
}