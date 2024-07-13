let totalAmount = 0;

function addExpense() {
    const expenseName = document.getElementById('expense-name').value.trim();
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        const expenseList = document.getElementById('expenses');
        const expenseItem = document.createElement('li');

        expenseItem.innerHTML = `
            <span>${expenseName}</span>
            <span>$${expenseAmount.toFixed(2)}</span>
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

function clearAllExpenses() {
    const expensesList = document.getElementById('expenses');
    expensesList.innerHTML = ''; // Clear all list items

    totalAmount = 0;
    document.getElementById('total-amount').innerText = '0.00'; // Reset total amount display
}
