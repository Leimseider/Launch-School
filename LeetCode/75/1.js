let nums = [1,2,3,4];

function runningSum(nums) {
  let finalArray = [];
  for (let idx = 0; idx < nums.length; idx++) {
    if (idx === 0) finalArray.push(nums[0]);
    else {
      finalArray.push(nums[idx] + nums[idx - 1]);
    }
  }
  console.log(finalArray);
}

runningSum(nums);