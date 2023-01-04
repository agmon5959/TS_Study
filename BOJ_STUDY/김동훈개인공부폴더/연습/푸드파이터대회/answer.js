function solution(food) {
    const foodList = [];
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < parseInt(food[i] / 2); j++) {
            foodList.push(i);
        }
    }
    return foodList.join('') + '0' + foodList.reverse().join('')
}

