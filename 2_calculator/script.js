function calc(){
    // Receiving the values
    let operator1 = document.getElementById('first').value; 
    let operator2 = document.getElementById('second').value;
    let ope = document.getElementById('operation').value;
    // calculating
    if(ope == '+'){
        var res = parseInt(operator1) + parseInt(operator2);
    }
    if(ope == '-'){
        var res = parseInt(operator1) - parseInt(operator2);
    }
    if(ope == '*'){
        var res = parseInt(operator1) * parseInt(operator2);
    }
    if(ope == '/'){
        var res = parseInt(operator1) / parseInt(operator2);
    }
    // Taking result 
    document.getElementById('res').value = res
}