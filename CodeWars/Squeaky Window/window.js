function sliding(nums, k) {
    let result = [];
    for (let i = 0; i <= nums.length - k; i++) {
        result.push(Math.max(...nums.slice(i, i + k)));
    }
    return result;
}