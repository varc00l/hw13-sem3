let numbers = [1, 2, 3];
let [, secondNumber] = numbers;
numbers[1] = 10;
console.log(numbers);

let strings = ["один", "два", "три"];
strings.push("чотири");
console.log(strings);

let [first, second, third] = strings;
console.log(first, second, third);

let arr = [5, 10, 15];
let sum = 0;
for (let value of arr) {
    sum += value;
}
console.log(`Сума: ${sum}`);

let array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);
}

let words = ["яблуко", "банан", "автомобіль", "ліс", "комп'ютер"];
for (let word of words) {
    if (word.length > 5) {
        console.log(word);
    }
}

let numArray = [5, 8, 3, 12, 15, 7, 1, 18, 2, 10];
let [max, ...rest] = numArray;
for (let value of rest) {
    if (value > max) {
        max = value;
    }
}
console.log(`Максимальне значення: ${max}`);

let numArr = [5, 8, 3, 12, 15, 7, 1, 18, 2, 10];
for (let value of numArr) {
    if (value % 2 === 0) {
        console.log(value);
    }
}

const account = {
    balance: 0,
    transactionHistory: [],

    deposit(amount) {
        this.balance += amount;
        this.transactionHistory.push({ type: 'deposit', amount });
        console.log(`Баланс поповнено на ${amount}. Поточний баланс: ${this.balance}`);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Недостатньо коштів на рахунку.');
        } else {
            this.balance -= amount;
            this.transactionHistory.push({ type: 'withdraw', amount });
            console.log(`Знято ${amount}. Поточний баланс: ${this.balance}`);
        }
    },
  
    getBalance() {
        console.log(`Поточний баланс: ${this.balance}`);
        return this.balance;
    },                                                                          
  
    getTransactionHistory() {
        console.log('Історія транзакцій:', this.transactionHistory);
        return this.transactionHistory;
    }
};

account.deposit(1000); 
account.withdraw(300); 
account.getBalance();
account.getTransactionHistory(); 
й
