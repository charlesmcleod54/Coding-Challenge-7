// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subTotal + (subTotal * taxRate)) - discount;
    return 'Total Invoice: $${total.toFixed(2)}';
}

console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"

// Task 2
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek *52);
    return 'Hourly Wage: $${hourlyWage.toFixed(2)}';
};

console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

// Task 3
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount * (1 - discountRate);
    return 'Discounted Price: $${discountedPrice.toFixed(2)}';
};

console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

// Task 4
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    return 'Shipping Cost: $${baseCost.toFixed(2)}';
}

console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

// Task 5
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return 'Total Interest: $${interest.toFixed(2)}';
}

console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// Task 6
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]

// Task 7
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        console.log('Curent Balance: $${balance}');
    };
}

let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: $-500"

// Task 8
function calculateGrowth(years, revenue) {
    if (years === 0) return revenue;
    return calculateGrowth(years - 1, revenue * 1.05);
}

console.log('Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}'); // Expected output: "Projected Revenue: $1102.50"
console.log('Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}'); // Expected output: "Projected Revenue: $6381.41"
