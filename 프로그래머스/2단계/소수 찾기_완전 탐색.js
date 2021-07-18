function solution(numbers) {
    const arr = numbers.split("");
    const answer = new Set();
    
    function checkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false
        }
        return true;
    }
    
    function getNumber(arrNumbers, fixedNumber) {
        if (arrNumbers.length) {
            for (let i = 0; i < arrNumbers.length; i++) {
                const temp = [...arrNumbers];

                temp.splice(i, 1);

                if (checkPrime(parseInt(fixedNumber + arrNumbers[i]))) {
                    answer.add(parseInt(fixedNumber + arrNumbers[i]));
                }

                getNumber(temp, fixedNumber + arrNumbers[i]);
            }
        }
    }
    
    getNumber(arr, '');

  return answer.size;
}
