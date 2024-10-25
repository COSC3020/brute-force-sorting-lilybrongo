function permutationSort(array, temp = [], count = 0, totalLength = array.length) {
    // Base case: If the array is empty, return the current count
    if (array.length < 1) {
        return count;
    }

    // Loop through each element in the original array
    for (let i = 0; i < array.length; i++) {
        temp.push(array[i]);

        // Recursively call permutationSort with the remaining elements
        count = permutationSort(array.slice(0, i).concat(array.slice(i + 1)), temp, count, totalLength);

        // Check if the temporary array has reached the length of the original array
        if (temp.length === totalLength) {
            count++;

            // Check if the current permutation is sorted
            if (isSortedArray(temp)) {
                return count;
            }
        }
        temp.pop();
    }
    return count;
}

function isSortedArray(array) {
    // Check if the array is sorted
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }
    return true;
}
