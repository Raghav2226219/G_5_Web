/*

*/

Array.prototype.reduceRep = function(call, init){
    let acc = init;
     
    for(let i = 0; i<this.length; i++){
        acc = call(acc,this[i]);
    }

    return acc;
}

let arr = [1,2,3,4];
const initial = 10;
const sumInit = arr.reduceRep(
    (accumulator, currval) => accumulator+currval,initial
);

console.log(sumInit);
