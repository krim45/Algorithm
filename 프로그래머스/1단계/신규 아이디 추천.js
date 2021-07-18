function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replace(/[^\w\-\_\.]/gi,"")
        .replace(/\.+/gi,".")
        .replace(/^\.|\.$/gi,"");
    if (!new_id) {
        new_id += 'a';
    }
    if (new_id.length > 15) {
        new_id = new_id.slice(0, 15).replace(/\.$/gi,"");
    }
    if (new_id.length < 3) {
        while (new_id.length < 3) {
            new_id += new_id[new_id.length - 1];
        }
    }
    return new_id;
}

// 좀 더 다듬은 정규식
function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replace(/[^\w\.\-\_]/gi, '')
        .replace(/\.+/gi, '.')
        .replace(/^\.|\.$/gi, '')
        .replace(/^$/gi, 'a')
        .slice(0, 15).replace(/\.$/gi, '');
    
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }
    return new_id;
}
