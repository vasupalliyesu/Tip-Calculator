function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    const tip = (billAmount * tipPercent) / 100;
    const total = billAmount + tip;

    document.getElementById("tipAmount").innerText = "₹" + tip.toFixed(2);
    document.getElementById("totalAmount").innerText = "₹" + total.toFixed(2);
}
