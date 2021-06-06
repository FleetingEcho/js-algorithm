  //1.转置矩阵行数是原矩阵的列数，转置矩阵的列数是原始矩阵的行数
  //2.转置矩阵下标（i,j）的元素，转置后的（j,i）的元素
function reverseMatrix(sourceArr){
    var reversedArr = [];
    sourceArr.reverse();
    //原矩阵列数
    for(var i =0; i < sourceArr[0].length ; i++){
        reversedArr[i] = []
        for(var j=0; j < sourceArr.length; j++){
            reversedArr[i][j] = sourceArr[j][i]
        }
    }

    return reversedArr;
}

//调用
var tArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
var testArr = reverseMatrix(tArr)
console.log(JSON.stringify(testArr))
/*
res=[
    [7,4,1],
    [8,5,2],
    [9,6,3]]
*/