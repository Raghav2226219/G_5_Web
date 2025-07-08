const str = "1234531256fdsJ"
let res = 0;
for(let ch of str) {
  if(!isNaN(ch) && ch >= '0' && ch <='9') {
    let sum = parseInt(ch);
    res += sum*sum;
  }
}

console.log(res);