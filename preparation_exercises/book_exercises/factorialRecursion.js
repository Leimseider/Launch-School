function factorial(n) {
    
    while (n > 0) {
    factorial(n * (n -1));
    n -= 1
    
    }
}
factorial(8)