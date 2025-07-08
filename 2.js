// function cal(param1){
//     console.log("Calculate the bl");
//     param1();
// }

// var sumoftwo = () => {
//     console.log("Sum of two working");
// }

// cal();

// main hod
// function calculate(logicFunction, a, b){
//     return logicFunction(a,b);
// }

// // logical function
// function add(a,b){
//     return a+b;
// }

// // logical function
// function sub(a,b){
//     return a-b;
// }

// console.log(calculate(add,3,5))

// console.log(calculate(sub,8,5))

function student() {
    let obj = {
        name: "Raghav",
        fees : 30000
    }
    return obj;
}

function emi(student) {
    const fee = student();
    return fee.fees/10;
}

function greeting(student,emi) {
    const stu = student()
    console.log(`Welcome ${stu.name} with fees ${ stu.fees} and emi ${emi(student)}`);
}

greeting(student, emi);
