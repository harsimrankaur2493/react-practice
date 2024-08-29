const vahicle  = {
    brand :"Ford",
    year: 2021,
    color:"red",
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
      }

}

function myVehicle(vahicleObject){
    const message = vahicleObject.brand;
    console.log(message);
}
//on destructuring in the first one 

function myVehiclea({brand , year , color, registration:{country}}){
    const message =brand;
    console.log(message +" "+ country);
}
myVehiclea(vahicle);
