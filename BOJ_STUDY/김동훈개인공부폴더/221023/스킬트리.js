function solution(skill, skill_trees) {
    let result = 0;
    const regex = new RegExp(`[^${skill}]`, 'g');
    const fillteredSkill = skill_trees.map(x => x.replace(regex, ''));
    result += skill_trees.length - fillteredSkill.length

    fillteredSkill.forEach((iter, idx) => {
        let bool = true;
        for (let i = 0; i < iter.length; i++) {
            if (skill[i] !== iter[i]) {
                bool = false;
            }
        }

        if (bool) {
            result++;
        }

    })

    return result;
}