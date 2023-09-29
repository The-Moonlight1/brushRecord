/**
 * 
 * @param {*} a 
 * @returns 如果 b 传值,则递归调用继续相加，未传值，则返回之前和
 * 
 * 适用题：
 *  sum(1)(2)(3)()
 *  sum(2)(8)()
 */
function sum(a){
    return (b) =>{
        return b ? sum(a + b) : b
    }
}

/**
 * 
 * @param {*} a  一个数值
 * @returns 返回一个函数
 * 
 */

function sum2(a){
    const fn = (b) => sum(a + b)
    fn[Symbol.toPrimitive] = () => a
    return fn
}

/**
 * 
 * @param {*} a 
 * @returns 返回一个函数
 */
function sum3(a){
    const func = function(b){
        return b ? sum(a + b) : b
    }
    func.valueOf = () => num
    return func
}