// Deque
function solution(people, limit) {
    let count = 0;
    
    people.sort((a,b) => a - b);
    
    while(people.length > 0) {
        if (people[people.length - 1] === limit) {
            people.pop();
            count++;
        }
        else if (people[people.length - 1] + people[0] <= limit) {
            people.pop();
            people.shift();
            count++;
        }
        else if (people[people.length - 1] + people[0] > limit) {
            people.pop();
            count++;
        }
    }
    
    return count;
}

// 투포인터
function solution(people, limit) {
    people.sort((a,b) => a - b);
    
    for (var i = 0, j = people.length -1; i < j; j--) {
        if (people[i] + people[j] <= limit) {
            i++;  
        }
    }
    
    return people.length - i;
}
