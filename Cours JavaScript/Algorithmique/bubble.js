// **Bubble Sort**

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // let temp = array[j];
                // array[j] = array[j + 1];
                // array[j + 1] = temp;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            console.log(`j = ${j}`);
            console.log(array);
        }
        console.log(`i = ${i}`);
    }
}

// const bubbleSort = (array) => {
//     console.log(array.sort((a, b) => a - b));
// };

bubbleSort([1, 2, 65, 34, 7, 98, 2, 3, 451]);
