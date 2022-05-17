class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
    
    // static methods or class methods are methods belonging to t
    // he class and are called without creating an instance of the class
    static topBookStore() {
        return 'Barnes and Noble'
    }

  // getSummary Methoth
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
    
    revise(newYear) {
        this.newYear = newYear;
        this.revised = true;

    }
}

//Instantiate Object
const book1 = new Book('Book one', 'Harriet', '2002')

console.log(book1);
console.log(book1.author);
console.log(book1.getSummary());

//static methoth
console.log(Book.topBookStore())