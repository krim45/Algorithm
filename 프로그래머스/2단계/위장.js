function solution(clothes) {
    var answer = 0;
    let obj = {};
    let arr = [];
    let mul = 1;
    
    for (let i = 0; i < clothes.length; i++) {
        if (obj[clothes[i][1]]) {
            obj[clothes[i][1]].push(clothes[i][0]);
        } else {
            obj[clothes[i][1]] = [clothes[i][0]];
        }
    }
    
    for (let i = 0; i < Object.keys(obj).length; i++) {
        arr.push(obj[Object.keys(obj)[i]].length + 1);
    }
    
    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i];
    }
    
    answer = mul - 1
    
    
    return answer;
}

// 숫자로
function solution(clothes) {
    var answer = 0;
    let obj = {};
    let arr = [];
    let mul = 1;
    
    for (let i = 0; i < clothes.length; i++) {
        if (obj[clothes[i][1]]) {
            obj[clothes[i][1]] += 1;
        } else {
            obj[clothes[i][1]] = 2;
        }
    }
    
    for (let i = 0; i < Object.keys(obj).length; i++) {
        mul *= obj[Object.keys(obj)[i]];
    }
    
    answer = mul - 1
    
    
    return answer;
}
