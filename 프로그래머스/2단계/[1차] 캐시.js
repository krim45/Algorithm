function solution(cacheSize, cities) {
    cities = cities.map(v => v.toUpperCase());
    
    const size = [];
    let time = 0;
    
    for (let city of cities) {
        const idx = size.indexOf(city);
        
        if (idx === -1) {
            time += 5;
        } else {
            time += 1;
            size.splice(idx, 1);
        }
        size.push(city);
        if (size.length > cacheSize) size.shift();
    }
    
    return time;
}
