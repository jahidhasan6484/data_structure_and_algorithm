function factorial(n) {
    let result = 1;
    if (n == 0 || n == 1) {
        return result;
    } else {
        for (let i = n; i > 0; i--) {
            result *= i;
        }
    }
    return result;
}

console.log(factorial(5));