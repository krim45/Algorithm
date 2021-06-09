function solution(n) {
    var answer = 0;
    let a = n.toString().split('').map(v => +v);
    for (let i = 0; i < a.length; i++) {
        for (let n = 0; n < a.length; n++) {
            if (a[i] <= a[i + n]) {
                let b = a[i];
                a[i] = a[i + n]; 
                a[i + n] = b;
            }
        }
    }
    for (let j = 0; j < a.length; j++) {
        answer += a[a.length - 1 - j] * Math.pow(10, j);
    }
    return answer;
}

// 모범 답안
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}
