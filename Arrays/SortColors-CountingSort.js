const nums = [2,0,0,1,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Counting Sort
const SortColors = (nums) => {
  const range = [0,0,0];
  
  nums.forEach(ele => {
    if(range[ele]) {
      range[ele]++;
    } else {
      range[ele] = 1;
    }
  });
  

  nums = []; 
  for (let i = 0; i < range.length; i++) {
    let ele = range[i];
    while(ele!=0){
      nums.push(i)
      ele -- ;
    }
  }
  console.log("🚀 ~ file: SortColors.js ~ line 18 ~ SortColors ~ asdaasd", nums);
  

}

SortColors(nums);