// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // } 
}

// Prototype
// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}; 

// Inheritance (from Book constructor)
// magazine constructor

function Magazine(title, author, year, month) {
 Book.call(this, title, author, year)
  this.month = month;

}

// Inherit prototype (from Book)
Magazine.prototype = Object.create(Book.prototype)

// Instansiate magazine Object

const mag1 = new Magazine("Mag one", "Harriet", "1999", "Jan");

console.log(mag1)
