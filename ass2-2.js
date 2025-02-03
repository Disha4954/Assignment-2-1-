let expenses = []

function addExpense(description, amount, date) {
    try {
        if (!description || !amount || !date) {
            throw new Error("Enter all fields");
        }
        expenses.push({ description, amount, date })
        console.log('Expense added:', { description, amount, date });
    } catch (err) {
        console.log(err)
    }
}


function totalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}


function filterByDateRange(startDate, endDate) {
    return expenses.filter(expense => expense.date >= startDate && expense.date <= endDate);
}

async function fetchExpenseReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('Expense report fetched successfully!');
            } else {
                reject(new Error('Failed to fetch expense report.'));
            }
        }, 2000);
    });
}

module.exports = {
    addExpense,
    totalExpenses,
    filterByDateRange,
    fetchExpenseReport
}