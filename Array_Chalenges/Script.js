console.log("Always Hungry")
function alwaysHungry(arr) {
    var printedHungry = false
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            printedHungry = true
            console.log("yummy")
        }
    }
    if (printedHungry == false){
        console.log("I'm Hungry")
    }
}


alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


console.log("High Pass Filter")
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > cutoff)
            filteredArr.push (arr[i])
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


console.log("Better than average")
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var avg = sum /arr.length
    var count = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > avg){
            count += 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


console.log("Array Reverse")
function reverse(arr) {
    var reverseArr = [];
    for (var i = arr.length-1; i >= 0; i--){
        reverseArr.push (arr[i])
    }
    return reverseArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


console.log("Fibonacci Array")
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length< 10){
        var sum = fibArr[fibArr.length-1] + fibArr[fibArr.length-2]
        fibArr.push (sum)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

