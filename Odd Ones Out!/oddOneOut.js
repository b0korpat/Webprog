function oddOnesOut(nums) {
    var ans = [];
    for (var i = 0; i < nums.length; ++i) {
        var count = 0;
        for (var j = 0; j < nums.length; ++j)
            if (nums[i] == nums[j])
                count++;
        if (count % 2 == 0)
            ans.push(nums[i]);
    }
    return ans;
}