// 3. 数组中重复的数字
/* 
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
*/

const findRepeatNumber = (arr) => {
	if (arr.length === 0) return null
	let origin = arr
	let set = new Set([...arr])
	let setRes = [...set]
	let res,
		j = 0 //指针
	origin.some((item, index, self) => {
		if (item !== setRes[j]) {
			res = item
			return true
		}
		j++
	})

	return res
}

console.log(findRepeatNumber([2, 3, 1, 0, 5, 5, 3]))

/* 
资源浪费的解答：
const findRepeatNumber=(arr)=>{
  let obj={};
  arr.map((item,index,self)=>{
      if(obj[item]!==undefined){
          obj[item]+=1
          return
      }
      obj[item]=1;

  })
  // return obj
  const value=Object.values(obj);
  const keys=Object.keys(obj);
  let temp
  value.some((item,index)=>{
      if(item!==1){
          temp=Number(keys[String(index)])
          return true
      }
  })
  return temp
}

*/
