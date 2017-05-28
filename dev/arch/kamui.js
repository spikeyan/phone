/**
 * Created by kamui on 17-5-26.
 */
var kamui={
    arr2arr(arr,count){
        var x=[];
        for(let i=0,len=(arr.length/count)|0;i<len;i++){
            x.push(arr.slice(i*count,(i+1)*count))
            if(i==len-1&&arr.length%count!=0){
                x.push(arr.slice((i+1)*count,arr.length))
            }
        }
        return x;
    }
}

export default kamui