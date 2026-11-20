function myMap(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }

    return result;
}
let nums = [2, 4, 6, 8];
let ans = myMap(nums, function(x) {
    return x * 2;
});

console.log(ans);