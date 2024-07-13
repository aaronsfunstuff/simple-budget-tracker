// script.js

let totalAmount = 0;

function addEntry() {
    const entryName = document.getElementById('entry-name').value.trim();
    const entryAmount = parseFloat(document.getElementById('entry-amount').value);
    const entryType = document.getElementById('entry-type').value;

    if (entryName && !isNaN(entryAmount) && entryAmount > 0) {
        const entriesList = document.getElementById('entries');
        const entryItem = document.createElement('li');
        entryItem.classList.add(entryType);

        entryItem.innerHTML = `
            <span>${entryName}</span>
            <span>$${entryAmount.toFixed(2)}</span>
            <button onclick="removeEntry(this, ${entryAmount}, '${entryType}')">Remove</button>`;
        entriesList.appendChild(entryItem);

        if (entryType === 'expense') {
            totalAmount -= entryAmount;
        } else if (entryType === 'income') {
            totalAmount += entryAmount;
        }
        
        document.getElementById('total-amount').innerText = totalAmount.toFixed(2);

        document.getElementById('entry-name').value = '';
        document.getElementById('entry-amount').value = '';
    } else {
        alert('Please enter a valid name and amount.');
    }
}

function removeEntry(button, amount, type) {
    const entryItem = button.parentElement;
    entryItem.remove();

    if (type === 'expense') {
        totalAmount += amount;
    } else if (type === 'income') {
        totalAmount -= amount;
    }

    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}

function clearAllEntries() {
    document.getElementById('entries').innerHTML = '';
    totalAmount = 0;
    document.getElementById('total-amount').innerText = '0.00';
}
