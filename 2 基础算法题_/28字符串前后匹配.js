//    字符串前后匹配问题
//    * 代表有且仅有3相同字符
//    +表示单个字符，前后不同
//  *{N}  不是3个，但>1  例如 5表示  *{5}   ;   10表示 *{10}
// 测试用
const str1 = '+++++* abcdemmmmmdcdddxx'
const str2 = '**+*{2} mmmrrrkbb'
const str3 = '*{4}+++*{4} aaaabaecccc'
const str4 = '*{10}++** ssssssssssabcccddd'
const str5 = '*{N}++** aabcccddd'

const StringChallenge = (str) => {
  let index = str.indexOf(' ')
  let arr = str.split('')
  let arr1 = [],
    arr2 = [],
    counts = []
  let strTemp = ''
  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      arr1.push(arr[i])
    } else if (i > index) {
      arr2.push(arr[i])
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (i === 0) {
      strTemp += arr2[0]
      continue
    }
    if (arr2[i] !== strTemp.charAt(0)) {
      counts.push(strTemp.length)
      strTemp = arr2[i]
    } else {
      strTemp += arr2[i]
      if (i === arr2.length - 1) {
        counts.push(strTemp.length)
        break
      }
    }
  }
  //深拷贝一份数据，否则sort会改变原数组
  // let countsCopy = JSON.parse(JSON.stringify(counts))
  // const getMax = (arr) => {
  //   return arr.sort((a, b) => {
  //     return b - a
  //   })[0]
  // }
  // let maxValLength = String(getMax(countsCopy)).length

  let j = 0 //arr1的指针 pointer
  let judge = true //设定一个flag
  let insideNumber // {}内数字
  for (let i = 0; i < counts.length; i++) {
    if (judge === false) break
    if (j >= arr1.length) break
    // 不为 * 也不为 +
    if (counts[i] !== 3 && counts[i] !== 1) {
      if (arr1[j] !== '*') {
        judge = false
        break
      }
      let maxValLength = String(counts[i]).length
      // {}括号内单位数或者多位数
      if (arr1[j + 1] === '{' && arr1[j + 2 + maxValLength] === '}') {
        let temp = j + 2
        // {}内多位数，字符串拼接后转数字
        if (maxValLength >= 2) {
          insideNumber = arr1[temp]
          for (let i = 2; i <= maxValLength; i++) {
            insideNumber += arr1[j + 1 + i]
          }
          insideNumber = Number(insideNumber)
        } else {
          // {}内单位数
          insideNumber = Number(arr1[temp])
        }
        counts[i] === insideNumber ? (judge = true) : (judge = false)
        j += 3 + maxValLength
        continue
      } else {
        judge = false
        break
      }
    }
    if (counts[i] === 3) {
      arr1[j] === '*' ? (judge = true) : (judge = false)
      j++
      continue
    }
    if (counts[i] === 1) {
      arr1[j] === '+' ? (judge = true) : (judge = false)
      j++
      continue
    }
  }
  return judge
}

console.log(StringChallenge(str1))
console.log(StringChallenge(str2))
console.log(StringChallenge(str3))
console.log(StringChallenge(str4))
console.log(StringChallenge(str5))
