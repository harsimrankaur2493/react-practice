// const number = [1,2,3,4,5];
// const number2=[6,7,8,9];
// // const [one, two , ...rest] = number;
// // console.log(one , two);
// const a=[...number , ...number2];
// console.log(a);

const myVehicle={
    brand:"Ford",
    year:2021,
    type:"suv"
}

const more = {
    owner:"ghanshyam",
    insurance:true
}

const updates = {...myVehicle , ...more}
console.log(updates);

