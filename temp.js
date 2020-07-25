

function removedup(arr){
    let dic = {};
    let i=0;
    while(i<arr.length){
        if(dic.arr[i] === undefined){
            dic.arr[i] = 1;
            i++;
        }
        else{
            for(let j=i; j<arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr.pop();
        }
    }
    return arr;
}


var arr = [1,3,2,2,3,5,5,4];
removedup(arr);