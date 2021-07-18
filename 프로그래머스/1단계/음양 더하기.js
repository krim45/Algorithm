function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// reduce
function solution(absolutes, signs) {
    return absolutes.reduce((acc, v, i) => acc += v * (signs[i] ? 1 : -1), 0)
}
