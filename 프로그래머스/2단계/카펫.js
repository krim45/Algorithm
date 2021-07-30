function solution(brown, yellow) {
    var answer = [];
    let area = brown + yellow;
    
    for (let i = 1; i <= Math.sqrt(area); i++) {
        if (area % i === 0) {
            let a = Math.max(area / i, i);
            let b = Math.min(area / i, i);
            if (brown === 2 * a + 2 * b - 4 && yellow === a * b - brown) {
                answer = [a,b];
            }
        }
    }
    return answer;
}
