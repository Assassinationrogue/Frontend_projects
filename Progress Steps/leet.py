nums = [2,7,11,15]


# print(nums[0] + nums[1])
lnthOfLst = len(nums)
dummyOne = 0
try:
    for i in range(lnthOfLst):
        print(nums[i] + nums[i+1])

    for s in nums:
        dummyOne = dummyOne + s
   

except:
    pass


print(dummyOne)