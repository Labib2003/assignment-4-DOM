function getInnerText(id) {
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}

function getValue(id) {
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

document.getElementById('calc-btn').addEventListener('click', function () {
    const food = getValue('foodExpense');
    const rent = getValue('rentExpense');
    const clothe = getValue('clotheExpense');
    const total = food + rent + clothe;
    if (isNaN(total)){
        alert('Please make sure all of the input flelds have number values or 0.');
    }
    else{
        document.getElementById('total-expense').innerText = total;
    }
});