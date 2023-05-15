function Book(title, author) {
  this.title = title;
  this.author = author;
  Book.titleCatalog.push(title);
}

Book.titleCatalog = [];

Book.prototype.read = function () {
  console.log(`Reading ${this.title}`);
};

Book.allTitles = function() {
  return Book.titleCatalog;
};

let book1 = new Book('1984', 'Orwell');
let book2 = new Book('Brave New World', 'Huxley');

console.log(Book.allTitles());