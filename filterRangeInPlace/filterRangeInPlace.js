// Looks for elements with values higher or equal to a and lower or equal to b in arr
// Returns array containning filtered results
const filterRangeInPlace = function (arr, num1, num2) {
    arr.reduceRight((_, item, index) => {
        if ((item < num1) || (item > num2))
            arr.splice(index, 1)
    }, null);
    // initial value (null) is supplied to reduceRight, otherwise
    // the last element in the array will be used and skipped
}

// Do not edit below this line
module.exports = filterRangeInPlace;