const linearSearch = (data, target) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([4, 9, 2, 54, 12, 20, 45, 36], 12))