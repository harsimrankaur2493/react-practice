class Car{
    constructor(name){
        this.name = name;
    }

    present(){
        return ("I have a " + this.name);
    }
}
class Model extends Car{
    constructor(name , mod){
        super(name);
        this.model = mod;
    }
    show(){
        return (this.present() + "it is a " + this.model);
    }
}
const car = new Car("Ford");
car.present();
