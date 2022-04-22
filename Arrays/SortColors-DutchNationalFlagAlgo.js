const nums = [2, 0, 0, 1, 0, 2, 1, 1, 0]
// Output: [0,0,1,1,2,2]

/**
 * take 3 pointers lo, mid, high /// DRY RUN MUST !
 */

const sortColors = (nums) => {
  let lo = 0;
  let mid = 0;
  let high = nums.length - 1
  let temp;
  while (mid<=high) {
    if (nums[mid] == 0) {
      temp = nums[lo];
      nums[lo] = nums[mid];
      nums[mid] = temp;
      lo++;
      mid++;
    }
    else if (nums[mid] == 1) {
      mid++;
    }
    else if (nums[mid] == 2) {
      temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      // mid++;
      high--;
    }
  }
  return nums;

}


console.log("🚀 ~ file: SortColors-DutchNationalFlagAlgo.js ~ line 37 ~ sortColors(nums)", sortColors(nums))
// sortColors(nums);