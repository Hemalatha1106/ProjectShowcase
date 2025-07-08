function operation(n){
    if(n== 0){
        return "Neither odd nor even";
    }
    else if(n%2 == 0){
        return "Even";
    }
    return "Odd";
}
function calculate(){
    const num = parseFloat(document.getElementById("num").value);
    if(isNaN(num)){
        document.getElementById("result").textContent = "Please enter a valid number";
        return;
    }
    const result = operation(num)
    document.getElementById("result").textContent = "Result: " + result;
}