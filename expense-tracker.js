const account = {
  name: "Danielle Lynch",
  expenses: [],
  income: [],
  addExpense(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome(description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary() {
    let totalExpenses = 0;
    let totalIncome = 0;
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    return `${this.name} has a total balance of ${
      totalIncome - totalExpenses
    }, a total in expenses of ${totalExpenses}`;
  },
};

account.addExpense("yummy", 11.3);
account.addExpense("yummy", 11.5);
account.addIncome("work", 100);
account.addIncome("work", 300);
console.log(account);
account.getAccountSummary();
console.log(account.getAccountSummary());
