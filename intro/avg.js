const average=function(num){
    let avg=0;
    for(let i=0;i<num.length;i++){
        avg=avg+num[i];        
    }
    avg=avg/num.length;
    return Math.round(avg);
}
var scores=[90,98,89,100,100,86,94];
console.log(average(scores));