let n=0;
let result=[];

const cal8Queens=(row)=>{
    if(row===8){
        n++
        return
    }
    for(let column=0;column<8;column++){
        if(checkQueen(row,column)){
            result[row]=column
            cal8Queens(row+1)
        }
    }
}

const checkQueen=(row,column)=>{
    let leftPosition=column-1;
    let rightPosition=column+1;
    // 注意判断条件i>=0
    for(let i=row-1;i>=0;i--){

    if(result[i]===column)return false;
    if(leftPosition>=0){
        if(result[i]===leftPosition)return false
    }
    if(rightPosition<8){
        if(result[i]===rightPosition) return false
    }
    leftPosition--;
    rightPosition++;
    }
    // 该列没有重复项并且符合条件
    return true;
}
cal8Queens(0);
console.log(n);