function solution(n) {
    for (let min = 1 ; min < n; min++) {
        if (n % min === 1) {
            return min;
        }
    }
}
