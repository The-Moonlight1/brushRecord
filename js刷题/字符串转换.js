function toUpper(word){
    return word.toUpperCase()
}
function transform(str){
    // "I?���love�??�the�?great�?�?wall�in��?beijing"
    // 1. 用正则 将 ? 的下一个字母变成大写
    // 2. 使用正则 将 不是 英文字母 的符号替换成 ' '
    return str.replace(/\?([a-zA-Z]{1})/g, toUpper).replace(/[^a-zA-Z]+/g,' ')
}

const str = "I?���love�??�the�?great�?�?wall�in��?beijing"
console.log(transform(str))