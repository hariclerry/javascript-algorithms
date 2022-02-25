class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  // getSummary Methoth
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//Instantiate Object
const book1 = new Book("Book one", "Harriet", "2002");

// console.log(book1);
// console.log(book1.author);
// console.log(book1.getSummary());


class Magazine extends Book {
    constructor(title, author, year, month) {
      super(title, author, year);
    this.month = month;
  }

  revise(newYear) {
    this.newYear = newYear;
    this.revised = true;
  }
}

//Instantiate Object
const mag1 = new Magazine("Book two", "Clerry", "1993", 'Jan');

console.log(mag1);
// console.log(book1.author);
console.log(mag1.getSummary());

