function solution(progresses, speeds) {
    var answer = [];
    let count = 0;
    
    function check(arr) {
        if(arr[0] >= 100) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= 100) {
                    count++;
                    arr.shift();
                    speeds.shift();
                    i--;
                } else {
                    break;
                }
            }
            answer.push(count);
            count = 0;
        }
    }
    
    while (progresses.length) {
        progresses = progresses.map((v, i) => v + speeds[i]);
        check(progresses);
    }
    
    
    return answer;
}
