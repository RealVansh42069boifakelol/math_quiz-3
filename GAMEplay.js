console.log("test");

function Send()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
   
    var actualAnsMulti = parseInt(number1)*parseInt(number2);

    questionNumber = "<h4>"+number1+" x "+number2+"<h4>";
    inputBox = "<br>Answer : <input type='text' id='inputCheckBox'>"
    checkButton = "<br><br><button class'btn btn-info' onclick='Check()'>Check</button>";
    row = questionNumber + inputBox + checkButton;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}