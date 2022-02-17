function getValue(id) {
    // getting the value as a number
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    // validating for non numbers and negative inputs
    if (inputValue >= 0) {
        return inputValue;
    }
    else {
        alert('Please make sure all of the input flelds have positive number values or 0.');
    }
}
//calculating expenses and balance
document.getElementById('calc-btn').addEventListener('click', function () {
    const income = getValue('income');
    const food = getValue('foodExpense');
    const rent = getValue('rentExpense');
    const clothe = getValue('clotheExpense');
    // calculating total expense
    const totalExpense = food + rent + clothe;
    // calculating remaining balance
    const balance = income - totalExpense;
    // validating the result
    if (income > totalExpense) {
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('balance').innerText = balance;
    }
    else {
        alert('Expense cannot be larger than income.');
    }
});
//calculating savings
document.getElementById('save-btn').addEventListener('click', function () {
    const income = getValue('income');
    const savePercent = getValue('saving-persentage');
    if (savePercent <= 100) {
        const saveAmount = (savePercent / 100) * income;
        const remainingBalance = income - saveAmount;
        document.getElementById('saving-amount').innerText = saveAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        console.log(remainingBalance);
    }
    else{
        alert('You cannot save more than 100%');
    }
});