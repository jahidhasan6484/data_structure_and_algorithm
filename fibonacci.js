//Problem: Given a number 'n', find the first 'n' element of the Fibonacci series


function fibonacci(n) {
    const fibonacci_sequence = [0, 1];
    for ( let i = 2; i <= n; i++) {
        fibonacci_sequence.push(fibonacci_sequence[i-1] + fibonacci_sequence[i-2]) 
    }
    return fibonacci_sequence;
    
}

console.log(fibonacci(6))