class Animal {
    constructor(name, age) {
        //properties, columns
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(this.name, this.age)
    }
    setNewAge (){
        this.age +=1;
    }
    getAnimalInfo() {
        console.log(this.name, this.age);
    }
}
export default Animal;
