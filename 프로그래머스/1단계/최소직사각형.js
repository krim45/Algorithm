function solution(sizes) {
    let width = 0;
    let height = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        const [wid, hei] = sizes[i].sort((a, b) => a - b);
        width = Math.max(width, wid);
        height = Math.max(height, hei);
    }
    
    return width * height;
}
