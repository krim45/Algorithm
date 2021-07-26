function solution(numbers) {
    var answer = '';
    
    numbers = numbers.map(v => v + "").sort((a,b) => {
        if (a + b > b + a) {
            return -1
        } else if (a + b < b + a) {
            return 1
        } else {
            return 0
        }
    }).join("");
    
    if (numbers[0] === "0") {
        numbers = "0"
    }
    
    return numbers;
}
