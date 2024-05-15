L = (n, L0, L1, add) => {
    let nums = [L0, L1]

    for (let i = 2; i < n; i++) {
        nums.push(nums[i - 2] + nums[i - 1] + add)
    }
    return nums
}
