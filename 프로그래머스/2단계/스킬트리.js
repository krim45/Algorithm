function solution(skill, skill_trees) {
    var answer = skill_trees.length;
    
    let str = new RegExp('[^' + skill + ']', 'g')
    
    for (let i = 0; i < skill_trees.length; i++) {
        skill_trees[i] = skill_trees[i].replace(str, "");
        if (skill.indexOf(skill_trees[i]) !== 0) {
            answer--;
        }
    }
    return answer;   
}

//

function solution(skill, skill_trees) {
    let reg = new RegExp(`[^${skill}]`, 'g');
    
    skill_trees = skill_trees.map((v) => v.replace(reg, ""))
                  .filter((x) => skill.indexOf(x) === 0 | x === "").length;
    
    return skill_trees;
}
