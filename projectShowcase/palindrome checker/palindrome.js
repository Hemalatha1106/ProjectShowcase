function palindrome(n){
    n = String(n);
    let reversed = n.split('').reverse().join('');
    return n === reversed;
}
function calculate(){
    const n = parseFloat(document.getElementById("num").value);
    if(isNaN(n)){
        document.getElementById("result").textContent="Please enter a valid number";
        return;
    }
    const result = palindrome(n);
    document.getElementById("result").textContent="Result: " + result;
}