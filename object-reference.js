let myExpenses = {
  name: "Danielle Lynch",
  expenses: 20,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account);
};

//addIncome account and income

let addIncome = function (account, amount) {
  account.income = account.income + amount;
};

//resetAccount reset expenses and income

let resetAccount = function (account) {
  account.expenses = 0;
};

//getAccountSummary print summary

let getAccountSummary = function (account) {
  let balance = myExpenses.income - myExpenses.expenses;
  return `The account summary for ${account.name} is ${balance}`;
};

addExpense(myExpenses, 2);
console.log(myExpenses);

addIncome(myExpenses, 1000);
console.log(myExpenses);

resetAccount(myExpenses);
console.log(myExpenses);

console.log(getAccountSummary(myExpenses));
