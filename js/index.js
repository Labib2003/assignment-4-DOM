function getInnerText(id) {
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}

function getValue(id) {
    // getting the value as a number
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    // validating for non numbers and negative inputs
    if (inputValue >= 0) {
        input.value = '';
        return inputValue;
    }
    else {
        alert('Please make sure all of the input flelds have positive number values or 0.');
    }
}

document.getElementById('calc-btn').addEventListener('click', function () {
    const income = getValue('income');
    const food = getValue('foodExpense');
    const rent = getValue('rentExpense');
    const clothe = getValue('clotheExpense');
    // calculating total expense
    const totalExpense = food + rent + clothe;
    // calculating remaining balance
    const remainingBalance = income - totalExpense;
    // validating the result
    if (income > totalExpense) {
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else {
        alert('Expense cannot be larger than income.')
    }
});