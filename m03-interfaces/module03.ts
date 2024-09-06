/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

interface Loan {
  principal: number;
  interestRate: number;
}

/*  TODO: Declare the ConventionalLoan interface. */

interface ConventionalLoan extends Loan {
  months: number;
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loan: Loan): string {
  let interest = loan.interestRate / 1200;
  let payment;
  payment = loan.principal * interest;
  return "The interest only loan payment is " + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loan: ConventionalLoan): string {
  const { principal, interestRate, months } = loan;
  let interest = interestRate / 1200;
  let payment;
  payment = (principal * interest) / (1 - Math.pow(1 / (1 + interest), months));
  return "The conventional loan payment is " + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({
  principal: 30000,
  interestRate: 5,
});

let conventionalPayment = calculateConventionalLoanPayment({
  principal: 30000,
  interestRate: 5,
  months: 180,
});

console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
