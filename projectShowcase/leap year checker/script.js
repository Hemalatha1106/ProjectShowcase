function checkLeapYear() {
    const year = document.getElementById("yearInput").value;
    const result = document.getElementById("result");

    if (year === "") {
        result.textContent = "Please enter a year.";
        return;
    }

    const y = parseInt(year);
    if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
        result.textContent = `${y} is a Leap Year ✅`;
    } else {
        result.textContent = `${y} is NOT a Leap Year ❌`;
    }
}
