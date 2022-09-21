// Binary Search in only applicable for ascending sorted data
// It's make the data into three part, like start-middle-end
// If middle will be greater than the target value, then the target value must be in left of the middle value
// Else if, then vice versa
// Have to update start-middle-end point 
// If target data found, return the index otherwise return -1




// If data is in ascending order:
const binarySearch = (data, target) => {
    let startIndex = 0;
    let endIndex = data.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.round((startIndex + endIndex) / 2);
        if (target === data[middleIndex]) {
            return middleIndex;
        }

        if (target > data[middleIndex]) {
            startIndex = middleIndex + 1;
        } else if (target < data[middleIndex]) {
            endIndex = middleIndex - 1
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 12))


const binarySearch2 = (data, target) => {
    // For sorting in ascending order
    data.sort((a, b) => a - b);

    let startIndex = 0;
    let endIndex = data.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.round((startIndex + endIndex) / 2);
        if (target === data[middleIndex]) {
            return middleIndex;
        }

        if (target > data[middleIndex]) {
            startIndex = middleIndex + 1;
        } else if (target < data[middleIndex]) {
            endIndex = middleIndex - 1
        }
    }
    return -1;
}

console.log(binarySearch2([1, 5, 3, 8, 9, 21, 2, 18], 5))