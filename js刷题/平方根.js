function mySqrt(x) {
    if(typeof x !== 'number' || x == NaN || x < 0) return NaN
    let start = 0
    let end = Math.floor(x/2)
    let res = 1

    while(start <= end) {
        const mid = Math.floor(start + (end - start)/2)
        const square = mid * mid
        if(square == x)  return mid
        else if(square > x) end = mid - 1
        else {
            res = Math.max(mid,res)
            start = mid + 1
        }
    }
    return res
}