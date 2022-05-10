function bubbleSort(array) {
    let needToIterate = true;

    let end = array.length - 1;

    while (needToIterate) {
        needToIterate = false; // assume we're done
        for (let i = 0; i < end; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]; // destructuring parallel assignment
                needToIterate = true;
            }
        }
        end--;
    }
    return array;
}

module.exports = bubbleSort;

