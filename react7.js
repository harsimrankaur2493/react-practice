export const name="jessie";
export const age=12;
 //or

 const name= "jessie";
 const age=40;
 export {name , age}

 //or 
 //number 1 and 2 are called named exports

 //now we will do default exports

 const message=()=>{
    const name = "jessie";
    const age = 40;
    return name+age;
     }
export default message; 