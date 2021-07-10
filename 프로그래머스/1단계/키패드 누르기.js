function solution(numbers, hand) {
    var answer = '';
    let keypad = [1, 2, 3,
                  4, 5, 6,
                  7, 8, 9,
                  10, 11, 12];
    let positionL = 10;
    let positionR = 12;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            numbers[i] = 11;
        }
        // 1, 4, 7
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            positionL = numbers[i];
            answer += 'L';
        
        // 3, 6, 9
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            positionR = numbers[i];
            answer += 'R';
            
        // 2, 5, 8, 0
        } else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 11) {
            let disL = Math.abs(Math.floor(keypad.indexOf(positionL)/3) - Math.floor(keypad.indexOf(numbers[i])/3))
                        + Math.abs((keypad.indexOf(positionL)%3) - (keypad.indexOf(numbers[i])%3));
            
            let disR = Math.abs(Math.floor(keypad.indexOf(positionR)/3) - Math.floor(keypad.indexOf(numbers[i])/3))
                        + Math.abs((keypad.indexOf(positionR)%3) - (keypad.indexOf(numbers[i])%3));
            
            if (disL < disR) {
                positionL = numbers[i];
                answer += 'L'
            } else if (disL > disR) {
                positionR = numbers[i];
                answer += 'R'
            } else if (disL === disR) {
                if (hand === 'left') {
                    positionL = numbers[i];
                    answer += 'L'
                } else {
                    positionR = numbers[i];
                    answer += 'R'
                }
            }
        }
    }
    return answer;
}

// 가중치를 이용한 풀이, 다른 사람 풀이
function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}
