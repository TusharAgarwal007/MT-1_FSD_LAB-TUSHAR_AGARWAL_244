function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b == 0) {
        return "Error";
    }
    return a / b;
}
function calc(a, b, fun) {
    return fun(a, b);
}
console.log(calc(12, 4, add));
console.log(calc(12, 4, sub));
console.log(calc(12, 4, mul));
console.log(calc(12, 4, div));