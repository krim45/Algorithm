function solution(strings, n) {
    var answer = [];
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings.length - 1; j++) {
            if (strings[j][n].charCodeAt(0) > strings[j + 1][n].charCodeAt(0)) {
                let tmp = strings[j + 1];
                strings[j + 1] = strings[j];
                strings[j] = tmp;
            }
            else if (strings[j][n].charCodeAt(0) === strings[j + 1][n].charCodeAt(0)) {
                if (strings[j] > strings[j + 1]) {
                    let tmp = strings[j + 1];
                    strings[j + 1] = strings[j];
                    strings[j] = tmp;
                }
            }
        }
    }
    answer = strings;
    return answer;
}
