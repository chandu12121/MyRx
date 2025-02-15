function sortedSquares(arr) {
    let n = arr.length;
    let result = new Array(n);
    let left = 0, right = n - 1;
    let index = n - 1;

    while (left <= right) {
        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }
    return result;
}


module.exports = sortedSquares;
