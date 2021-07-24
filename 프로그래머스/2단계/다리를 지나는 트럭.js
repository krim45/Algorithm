function solution(bridge_length, weight, truck_weights) {
    let bridge_weight = 0;
    let count = 1;
    let bridge = [];
    const origin = [...truck_weights];
    let arrive = [];
    
    for (let i = 0; i < bridge_length - 1; i++) {
        bridge.push(0);
    }
    
    while (arrive.length !== origin.length) {
        count++;
        
        if (bridge_weight + truck_weights[0] > weight) {
            bridge.push(0);
            if (bridge[0] !== 0) {
                arrive.push(bridge[0]);
                bridge_weight -= bridge[0];
            }
            bridge.shift();
        }
        
        else if (bridge_weight + truck_weights[0] <= weight) {
            bridge_weight += truck_weights[0];
            bridge.push(truck_weights[0]);
            truck_weights.shift();
            if (bridge[0] !== 0) {
                arrive.push(bridge[0]);
                bridge_weight -= bridge[0];
            }
            bridge.shift();
        }
        
        else if (truck_weights.length === 0) {
            bridge.push(0);
            if (bridge[0] !== 0) {
                arrive.push(bridge[0]);
                bridge_weight -= bridge[0];
            }
            bridge.shift();
        }
    }
    
    return count;
}

// 불필요한 루프를 줄이는 방법
function solution(bridge_length, weight, truck_weights) {
    let bridge_weight = 0;
    let count = 0;
    let bridge = [[0,0]];
    
    while (bridge.length > 0 || truck_weights.length > 0) {
        
        if (bridge[0][1] === count) {
            bridge_weight -= bridge.shift()[0];
        }
        
        if (bridge_weight + truck_weights[0] <= weight) {
            bridge_weight += truck_weights[0];
            bridge.push([truck_weights.shift(), count + bridge_length]);
            
        } else {
            
            if (bridge[0]) {
            count = bridge[0][1] - 1;
            }
        }
        
        count++;
    }
    
    return count;
}
