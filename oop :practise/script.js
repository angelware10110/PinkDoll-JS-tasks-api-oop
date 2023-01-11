console.log("connected to the source...");
console.log("back to the element...");
console.log("rooted...");

class User {
    constructor(name, surname, chipnumber, addy, frequency, blessing) {
        this.name = name;
        this.surname = surname;
        this.chipnumber = chipnumber;
        this.addy = addy;
        this.frequency = frequency;
        this.blessings = [];
    }

    //add blessings to the block that are claimed
    blessingsClaimed(blessing) {
        let target = document.getElementById(this.name);
        let element = document.createElement("p");
        element.innerText = blessing;
        target.appendChild(element).className = "bordered listitem";
        this.blessings.push(blessing);
    }
    check() {
        console.log(this.name + " claimed these blessings: ");
        for (let i = 0; i < this.blessings.length; i++) {
            console.log(this.blessings[i]);
        }
    }
}



const PinkDoll = new User ("PinkDoll", "Misty", "1000101", "Pink Oak 777, Magic Forest", "440Hz", "Abundance, Love, Shine, Joy");
const Butterfly = new User ("Butterfly", "Winggs", "1110101", "Yellow Rose 11, Rainbow Field", "440Hz", "Love, Passion, Taste");









    //     console.log(this.name, this.surname, this.chipnumber, this.addy, this.frequency)
    // 