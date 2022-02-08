// Functions calling functions: exercise

const check = function(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
};

const calls = function(age) {
    if (check(age)) {
        return "Hello there";
    }
    else {
        return "Hey kiddo";
    }
};

console.log(calls(18));
console.log(calls(17));
console.log(calls(21));

// VAT calculations Exc.1
const calacuVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};
const calacuPriceInclVAT = function(basePrice, VATPercentage) {
    const VAT = calacuVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calacuPriceInclVAT(2, 9));
console.log(calacuPriceInclVAT(1000, 21));

// VAT calculation Exc.2
const calcuBasePrice = function(priceInclVAT, VATPercentage) {
    const basePrice = priceInclVAT / ((100 + VATPercentage) / 100);
    return basePrice; 
};
const calcuBasePriceWithVAT = function(priceInclVAT, VATPercentage) {
    const basePrice = calcuBasePrice(priceInclVAT, VATPercentage);
    const VAT = priceInclVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calcuBasePriceWithVAT(2.18, 9));
console.log(calcuBasePriceWithVAT(1210, 21));