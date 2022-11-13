let number = document.getElementById('result');
let operator = null; 
let figure_1 = null;
let figure_2 = null;

button_7.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_7').value;
    else
    number.placeholder += document.getElementById('button_7').value;
}
button_8.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_8').value;
    else
    number.placeholder += document.getElementById('button_8').value;
}

button_9.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_9').value;
    else
    number.placeholder += document.getElementById('button_9').value;
}

button_4.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_4').value;
    else
    number.placeholder += document.getElementById('button_4').value;
}

button_5.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_5').value;
    else
    number.placeholder += document.getElementById('button_5').value;
}

button_6.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_6').value;
    else
    number.placeholder += document.getElementById('button_6').value;
}

button_1.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_1').value;
    else
    number.placeholder += document.getElementById('button_1').value;
}

button_2.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_2').value;
    else
    number.placeholder += document.getElementById('button_2').value;
}

button_3.onclick = function(){
    if (number.placeholder == "0" || number.placeholder == "Error")
    number.placeholder = document.getElementById('button_3').value;
    else
    number.placeholder += document.getElementById('button_3').value;
}

button_0.onclick = function(){

    if (number.placeholder[0] == "0" && number.placeholder.length == 1)
        return;

    else if (number.placeholder == "0" || number.placeholder == "Error")
        return;

    else
    number.placeholder += document.getElementById('button_0').value;
}

button_dot.onclick = function(){

    for (let i = 0; i < number.placeholder.length - 1; i++) {
        if (number.placeholder[i] == ".")
        return;
    }

    if (number.placeholder == "0" || number.placeholder == "Error")
        number.placeholder += document.getElementById('button_dot').value;

    else if (number.placeholder[number.placeholder.length - 1] == ".")
        return;
    
    else if (number.placeholder[0] == "-") {
        number.placeholder += "0" + document.getElementById('button_dot').value;
    }    

    else
    number.placeholder += document.getElementById('button_dot').value;
}

c_button.onclick = function() {
    number.placeholder = "0";
}

divide_button.onclick = function() {
    figure_1 = number.placeholder;
    number.placeholder = "0";
    operator = document.getElementById("divide_button").value;
}
minus_button.onclick = function() {
    if (number.placeholder == "0" || number.placeholder == "Error") {
        number.placeholder = document.getElementById('minus_button').value;
    }
    else {
        figure_1 = number.placeholder;
        number.placeholder = "0";
        operator = document.getElementById("minus_button").value;
}}
times_button.onclick = function() {
    figure_1 = number.placeholder;
    number.placeholder = "0";
    operator = document.getElementById("times_button").value;
}
plus_button.onclick = function() {
    figure_1 = number.placeholder;
    number.placeholder = "0";
    operator = document.getElementById("plus_button").value;
}

equal_button.onclick = function() {
    if (figure_1 == null)
        return;
    else
        figure_2 = number.placeholder;
        if (operator == "/") {
            if (figure_2 == "0") {
                number.placeholder = "Error";
            }
            else
            number.placeholder = Number(figure_1) / Number(figure_2);
        }
        else if (operator == "-")
        number.placeholder = Number(figure_1) - Number(figure_2);
        else if (operator == "*")
        number.placeholder = Number(figure_1) * Number(figure_2);
        else
        number.placeholder = Number(figure_1) + Number(figure_2);
}