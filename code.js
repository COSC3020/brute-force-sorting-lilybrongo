let found = false;//set to find if a sorted permutation has been found

function permutationSort(array, temp = [], count = 0, totalLength = array.length) {
    //base case for empty array
    if (array.length < 1) {
        return count;
    }
    //this will loop through each element in the o
    for (let i = 0; i < array.length; i++) {

        temp.push(array[i]);
        count = permutationSort(array.slice(0, i).concat(array.slice(i + 1)), temp, count, totalLength);

        if (temp.length == totalLength) {
            count++;
            if (isSortedArray(temp)) {
                found = true;
                return count;
            }
        }

        temp.pop();

    }    

    return count;

}    


function isSortedArray(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }
    return true;
}