function solution(m, musicinfos) {
    var answer = '';
    let arr = [];
    let max = 0;
    let maxIdx;

    let music = musicinfos.map(v => v.split(",")).map(v => {
        return [(v[1].split(":")[0] - v[0].split(":")[0])*60 + (v[1].split(":")[1] - v[0].split(":")[1]), v[2], v[3]]
    });

    function change(str) {
        return str.replace(/C#/gi, "H").replace(/D#/gi, "I").replace(/F#/gi, "J").replace(/G#/gi, "K").replace(/A#/gi, "L")
    }

    m = change(m);

    for (let i = 0; i < music.length; i++) {
        let time = music[i][0];
        music[i][2] = change(music[i][2]);
        let length = music[i][2].length;

        let count = parseInt(time/length);
        let tmp = music[i][2];

        if (time > length) {
            while (count > 1) {
                music[i][2] += tmp
                count--;
            }
            music[i][2] += music[i][2].substring(0, time%length) 
        } else {
            music[i][2] = music[i][2].substring(0, time)
        }
    }

    for (let i = 0; i < music.length; i++) {
        if (music[i][2].includes(m)) {
            arr.push(music[i]);
        }
    }

    if (arr.length === 0) {
        return "(None)"
    } else if (arr.length === 1) {
        return arr[0][1]
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i][0]) {
                max = arr[i][0];
                maxIdx = i;
            }
        }
        return arr[maxIdx][1]
    }
}

// 간결하게
function solution(m, musicinfos) {
    let max = 0;
    let maxIdx;
    
    m = m.replace(/\w#/gi, a => a[0].toLowerCase());
    
    let music = musicinfos.map(v => v.split(",")).map(v => {
        
        let time = (v[1].split(":")[0] - v[0].split(":")[0])*60 + (v[1].split(":")[1] - v[0].split(":")[1]);
        let name = v[2];
        let melody = v[3].replace(/\w#/gi, a => a[0].toLowerCase());
        melody = melody.repeat(Math.ceil(time/melody.length)).substr(0, time);
       
        return  [time, name, melody]
        
    }).filter(v => v[2].includes(m));
    
    if (music.length === 0) {
        return "(None)"
    }
    else if (music.length === 1) {
        return music[0][1]
    }
    else {
        for (let i = 0; i < music.length; i++) {
            if (max < music[i][0]) {
                max = music[i][0];
                maxIdx = i;
            }
        }
        return music[maxIdx][1]
    }
}
