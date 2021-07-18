function solution(files) {
    files.sort((a, b) => {
        let headA = '';
        let headB = '';
        let numberA = '';
        let numberB = '';
        let index = 0;

        // head A
        for (let i = 0; i < a.length; i++) {
            if (/[0-9]/.test(a[i])) {
                headA = a.toLowerCase().substring(0, i);
                index = i;
                break;
            }
        }

        // number A
        for (let i = index; i< a.length; i++) {
            numberA += a[i];
            if (numberA.length === 5 || !/[0-9]/.test(a[i+1])) {
                break;
            }
        }

        // head B
        for (let i = 0; i < b.length; i++) {
            if (/[0-9]/.test(b[i])) {
                headB = b.toLowerCase().substring(0, i);
                index = i;
                break;
            }
        }

        // number B
        for (let i = index; i < b.length; i++) {
            numberB += b[i];
            if (numberB.length === 5 || !/[0-9]/.test(b[i+1])) {
                break;
            }
        }

        // 순서 정리
        if (headA < headB) {
            return -1;
        }
        if (headA > headB) {
            return 1;
        }
        if (headA === headB) {
            if (numberA*1 < numberB*1) {
                return -1;
            }
            if (numberA*1 > numberB*1) {
                return 1;
            }
        }
        return 0;
    })

    return files;
}
