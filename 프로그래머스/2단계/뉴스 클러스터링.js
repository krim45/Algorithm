function makeSet(str) {
    const arr = str.toUpperCase().split('');
    const result = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] + arr[i + 1]);
    }
    
    return result.filter(str => {
        for (let letter of str) {
            if (!/[A-Z]/.test(letter)) return false
        }
        return true;
    });
}

function solution(str1, str2) {
    const arr1 = makeSet(str1);
    const arr2 = makeSet(str2);
    const set = new Set([...arr1, ...arr2])
    
    let intersection = 0;
    let union = 0;
    
    set.forEach(item => {
        const num1 = arr1.filter(v => v === item).length;
        const num2 = arr2.filter(v => v === item).length;
        
        intersection += Math.min(num1, num2);
        union += Math.max(num1, num2);
    })
    
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536)
}

// navie
function makeSet(str) {
    const arr = str.toUpperCase().split('');
    const result = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] + arr[i + 1]);
    }
    
    return result.filter(str => {
        for (let letter of str) {
            if (!/[A-Z]/.test(letter)) return false
        }
        return true;
    });
}

function intersection(arr1, arr2) {
    let count = 0;
    let visite = [];
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            const word1 = arr1[i];
            const word2 = arr2[j];
            
            if (!visite.includes(j) && word1 === word2) {
                visite.push(j);
                count++;
                break;
            }
        }
    }
    
    return count;
}

function union(arr1, arr2) {
    const count1 = {};
    const count2 = {};
    
    const counter = (arr, obj) => {
        for (let word of arr) {
            obj[word] = (obj[word] || 0) + 1;
        }
    }
    
    counter(arr1, count1);
    counter(arr2, count2);
    
    const count = {};
    let num = 0;
    
    for (let prop in count1) {
        if (count2[prop]) {
            count[prop] = Math.max(count1[prop], count2[prop]);
        } else {
            count[prop] = count1[prop];   
        }
    }
    
    for (let prop in count2) {
        if (count1[prop]) {
            count[prop] = Math.max(count1[prop], count2[prop]);
        } else {
            count[prop] = count2[prop];   
        }
    }

    for (let prop in count) {
        num += count[prop];
    }
    
    return num
}

function solution(str1, str2) {
    const arr1 = makeSet(str1);
    const arr2 = makeSet(str2);
    
    const num1 = intersection(arr1, arr2);
    const num2 = union(arr1, arr2);
    
    if (num2 === 0) return 1 * 65536
    
    return Math.floor(Number(num1 / num2 * 65536));
}
