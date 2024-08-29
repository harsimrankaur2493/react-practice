// const vehicles = ['ford' , 'mustang' ,"SUV"];
// const [car , car1 , car2] = vehicles;
// //or
// const car5 = vehicles[0];
// //and so on
// //or
// const [car8 ,,suv] = vehicles;

// function calculate(a,b){
//     const div = a/b;
//     const mul = a*b;
//     const sub = a-b;
//     const add = a+b;
//     return [div, mul, sub, add];
// }
// const [div , mul , sub , add] = calculate(10,20);

//DESTRUCTURING AN OBJECT 
class vehicle{
    
    constructor(name,type,year,color){
        if(typeof year !==Number ){
            throw new Error("year must be a number");
        }
        this.name = name;
        this.type = type;
        this.year = year;
        this.color = color;
    }
}

// const myVehicleOne = new vehicle("first" , "suv" , 2021 , "red");

// // const myVehicleOne = {
// //     name: "first",
// //     type: "suv",
// //     year: 2021,
// //     color: "red"
// // }
// console.log(myVehicleOne.name);

try{
    const myVehicleOne = new vehicle("first" , "suv" , "twotwo" , "red");
    console.log(myVehicleOne.color)
}catch(error){
    console.error(error.message);
}