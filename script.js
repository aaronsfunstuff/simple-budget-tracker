let totalAmount = 0;

function addExpense() {
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        const expenseList = document.getElementById('expenses');
        const expenseItem = document.createElement('li');

        expenseItem.innerHTML = `${expenseName} - $${expenseAmount.toFixed(2)} 
            <button onclick="removeExpense(this, ${expenseAmount})">Remove</button>`;
        expenseList.appendChild(expenseItem);

        totalAmount += expenseAmount;
        document.getElementById('total-amount').innerText = totalAmount.toFixed(2);

        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert('Please enter a valid expense name and amount.');
    }
}

function removeExpense(button, amount) {
    const expenseItem = button.parentElement;
    expenseItem.remove();

    totalAmount -= amount;
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}
