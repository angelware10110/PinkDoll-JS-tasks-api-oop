class Being {
    constructor(name, last_name, age){
        this.name = name,
        this.last_name = last_name,
        this.age = age
    }

    getBeingInfo(){
        console.log(this.name, this.last_name, this.age)
    }
     static greeting(){
        console.assert.log(`connected to the source, to the root, to the element...`)
     }
}
const Angel = new Being("Angel", "Reyna", 18);



console.log(Angel.age);
Angel.getBeingInfo();


class Student extends Being {
    constructor(name, last_name, age, course){
        super(name, last_name, age);
        this.course = course;
    }


    printStudentInfo(){
        super.getBeingInfo();
        console.log(this.course);
    }
}

const PinkDoll = new Student("PinkDoll", "Misty", 18, "JS")
PinkDoll.printStudentInfo();

const Rainbow = new Student ("Rainbow", "Endie", 18, "Cryptography")
Rainbow.printStudentInfo();

const topics = [];

class Teacher extends Being {
    constructor(name, last_name, age, subject, salary){
        super(name, last_name, age);
        this.subject = subject;
        this.salary = salary;
        this.topics = [];

    }

    setTopics(topic){
        this.topics.push(topic);
    }


    printTeacherInfo(){
        super.getBeingInfo();
        console.log(this.subject);
        console.log(this.salary);
        console.log(this.topics);
    }
}



topics.forEach(topic => console.log(topics));




const MissButterfly = new Teacher("MissButterfly", "Winggs", 18, "Flying", "101010101111111");
MissButterfly.printTeacherInfo();
MissButterfly.setTopics("Free fall");
MissButterfly.setTopics("Clouds diving");







