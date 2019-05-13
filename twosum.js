var twoSum = function twoSum(nums, target) {
    var result = [];
    // iterate through the array 1 time
    for (var i = 0; i < nums.length; i++) {
        //  iterate again to track the second index
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};
console.log(twoSum([2,7,11,15], 9));

function twoSumAlt(arr, target) {
    const numsMap = new Map();
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if(numsMap.has(target - arr[i])) {
            console.log("****")
            console.log(target-arr[i])
            return [numsMap.get(target - arr[i], i)];
            console.log(numsMap)
// get() returns a specified element associated with the specified key from the Map object.
    } else {
        numsMap.set(arr[i],i);
      //  set() adds or updates an element with a specified key and value to a Map object.
              
        }
    }     
}
            
function twoSumBest(array, target) {
    const numsMap = new Map();
    for (let i = 0; i < array.length; i++) {
        if(numsMap.has(target - array[i])) {
            console.log(i)
            return [numsMap.get(target - array[i]), i];
            // get() returns a specified element associated with the specified key from the Map object.
        } else {
            numsMap.set(array[i], i);
            //  set() adds or updates an element with a specified key and value to a Map object.
        }
    }
}


console.log(twoSumAlt([2,7,11,15,5,4], 9));
console.log(twoSumBest([2,7,11,15,5,4], 9));

// Output [ 0, 1 ]


