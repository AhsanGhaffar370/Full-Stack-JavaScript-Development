class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years =   new Date().getFullYear() - this.year;
        return `${this.title} is ${years} year old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
}

const book1 = new Book('ahsan story', 'ashley', '2008');

console.log(book1);

book1.revise('2020');

console.log(book1.getSummary());
console.log(book1.getAge());
