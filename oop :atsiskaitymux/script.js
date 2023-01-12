class Book {
    constructor(isbn, autorius, leidimo_metai, pavadinimas, aprasymas, puslapiu_skaicius) {
        this.isbn = isbn;
        this.autorius = autorius;
        this.leidimo_metai = leidimo_metai;
        this.pavadinimas = pavadinimas;
        this.aprasymas = aprasymas;
        this.puslapiu_skaicius = puslapiu_skaicius;
    }
    getInfo() {   
        console.log(`Book info: ${this.isbn} , ${this.autorius} , ${this.leidimo_metai}, ${this.pavadinimas},  ${this.aprasymas},  ${this.puslapiu_skaicius}  `)
        
        return [
            this.isbn,
            this.autorius,
            this.leidimo_metai,
            this.pavadinimas,
            this.aprasymas,
            this.puslapiu_skaicius
        ]

    }
}

const book1 = new Book (100101, "Oscar Wilde", 1881, "Picture of Dorian Grey", "Cruel", 250);
const book2 = new Book (110011, "Herman Hesse", 1940, "Steppenwolf", "Terrible", 230);
const book3 = new Book (111011, "Albert Camus", 1942, "The Stranger", "Disgusting", 280);

book1.getInfo();
book2.getInfo();
book3.getInfo();

class ElBook extends Book {
    constructor(isbn, autorius, leidimo_metai, pavadinimas, aprasymas, puslapiu_skaicius, formatas) {
        super(isbn, autorius, leidimo_metai, pavadinimas, aprasymas, puslapiu_skaicius);
        this.formatas = formatas;
    }

    toArrayMethod() {
        const infoArray = [];
        const info = super.getInfo();

        info.map(info => infoArray.push(info));
        infoArray.push(this.format);

        console.log(info);
        console.log(infoArray);
    }

    static palyginimas(book1, book2) {
        const infoArray = [];
        infoArray.push(book1, book2);
        console.log(infoArray)
    }
}

const book4 = new ElBook (100101, "Oscar Wilde", 1881, "Picture of Dorian Grey El Book", "Cruel", 250, "PDF");
const book5 = new ElBook (110011, "Herman Hesse", 1940, "Steppenwolf El Book", "Terrible", 230, "PDF");

book4.getInfo();
book5.getInfo();

book5.toArrayMethod();

ElBook.palyginimas(book4, book5);





 








