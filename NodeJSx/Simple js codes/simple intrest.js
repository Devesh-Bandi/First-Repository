// a = p*(1+t*r/100)
let p = 1000;
let t = 12;
let r = 2;

function calculateTotalAmountWithInterest(p, t = 1, r = 10) {
  let totalAmount = p * (1 + (t * r) / 100);
  return totalAmount;
}

let finalValue = calculateTotalAmountWithInterest(p, t, r);
console.log(finalValue);
