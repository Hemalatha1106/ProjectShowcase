function prime(n){
    if(n == 1){
        return true;
    }
    for(let i = 2; i < n; i++){
        if(n%i == 0){
            return "Not a Prime number";
        }
    }
    return "Prime Number";
}
function calculate(){
    const num = parseFloat(document.getElementById("num").value);
    if(isNaN(num)){
        document.getElementById("result").textContent="Enter a Valid number";
        return;
    }
    const result = prime(num);
    document.getElementById("result").textContent="Result: " + result;
}