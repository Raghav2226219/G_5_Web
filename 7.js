// Async Await 


// returns `Promise { <pending> }`

// function fetchData(){
//     const data = fetch('https://dummyjson.com/products');
//     console.log(data);
// }

// fetchData();

// reture json data

// async function fetchData(){
//     const data = await fetch('https://dummyjson.com/products');
//     console.log(data);
// }

// fetchData();


// return Data 

// async function fetchData(){
//     const data = await fetch('https://dummyjson.com/products');
//     const finalData = await data.json();
//     console.log(finalData);
// }

// fetchData();


//  Event Capturing, bubbling and stopPropagation

// const grandParent = document.getElementById('grandParent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// grandParent.addEventListener('click', (e) => {
//     console.log("Grandparent printed");
//     e.stopPropagation();
// })
// parent.addEventListener('click', (e) => {
//     console.log("Parent printed");
//     e.stopPropagation();
// })
// child.addEventListener('click', (e) => {
//     console.log("Child printed");
//     e.stopPropagation();
// })

/////////////////////////////////////////////////////////

// call()

// function admission(stuname, stuclass){
//     console.log(`HI ${stuname}, from class: ${stuclass}`);
// }

// const stu1 = {
//     studentName: "ABC",
//     studentClass: "G5"
// }
// const stu2 = {
//     studentName: "XYZ",
//     studentClass: "G5"
// }


// admission.call(stu1);
// admission.call(stu2);



// function admission(stuZone, stuCampus){
//     console.log(`HI ${this.stuname}, from class: ${this.stuclass}, ${stuZone}, Campus ${stuCampus}`);
// }

// const stu1 = {
//     stuname: "ABC",
//     stuclass: "G5"
// }
// const stu2 = {
//     stuname: "XYZ",
//     stuclass: "G5"
// }


// admission.call(stu1,'zeta', 'Punjab');
// admission.call(stu2,'zeta', 'Himachal');

//////////////////////////////////////////////////

// bind()

// function admission(stuZone, stuCampus) {
//     console.log(`HI ${this.stuname}, from class: ${this.stuclass}, ${stuZone}, Campus ${stuCampus}`);
// }

// const stu1 = {
//     stuname: "ABC",
//     stuclass: "G5"
// };

// const stu2 = {
//     stuname: "XYZ",
//     stuclass: "G5"
// };

// const stu1Admission = admission.bind(stu1);
// const stu2Admission = admission.bind(stu2);

// stu1Admission('zeta', 'Punjab');   
// stu2Admission('zeta', 'Himachal'); 

//////////////////////////////////////////////////

// apply()

function admission(stuZone, stuCampus) {
    console.log(`HI ${this.stuname}, from class: ${this.stuclass}, ${stuZone}, Campus ${stuCampus}`);
}

const stu1 = {
    stuname: "ABC",
    stuclass: "G5"
};
const stu2 = {
    stuname: "XYZ",
    stuclass: "G5"
};

admission.apply(stu1, ['zeta', 'Punjab']); 
admission.apply(stu2, ['zeta', 'Himachal']);
