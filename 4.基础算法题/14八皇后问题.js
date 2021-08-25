let n = 0 
let result = [] //数组下标为行，存储的是每一行皇后的存储的列的位置
const cal8queens = (row) =>{
    //终止条件
    if(row === 8){
        // console.log(result)
        n++
        return
    }
    //第一列的判断
    for(let column = 0; column < 8; column++){
        if(isOkColumn(row,column)){
            //保存皇后的位置
            result[row] = column
            //对下一行寻找数据
            cal8queens(row + 1);
        }
        //直到遍历结束
    }
}

//判断当前列是合适
const isOkColumn = (row, column) =>{
    //设置左上角
    let leftColumn = column - 1;
    let rightColumn = column + 1;

    for(let i = row - 1; i >=0; i--){
        //判断当前格子正上方是否有重复
        // 第i行的位置上有这个值了
        if(result[i] === column) return false

        //判断当前格子左上角是否有重复
        if(leftColumn >= 0){
            if(result[i] === leftColumn) return false;
        }

        //判断当前格子右上角是否有重复
        if(rightColumn < 8){
            if(result[i] === rightColumn) return false;
        }

        //继续遍历
        leftColumn--
        rightColumn++
    }

    return true;
}

//调用
cal8queens(0)
console.log(n)