module.exports = function towelSort(matrix) {
    let newArr = [];

    if (typeof matrix == "undefined") {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) matrix[i].reverse();
    }

    for (let elem of matrix) {
        newArr = newArr.concat(elem);
    }

    return newArr;
};
