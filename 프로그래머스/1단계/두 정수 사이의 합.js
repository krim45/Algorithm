function solution(a, b) {
  let answer = 0;
  let [min, max] = a > b ? [b, a] : [a, b];
    
  for (let i = min; i <= max; i++) {
      answer += i;
  }
    
  return answer;
}

// 가우스의 덧셈 (양 끝의 합 * 양 끝의 합의 개수)/ 2 
function solution(a, b) {
  let answer = 0;
  let [min, max] = a > b ? [b, a] : [a, b];
  
  return (min + max) * (max - min + 1) / 2
}
