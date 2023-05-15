function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,

    getDescription() {
      if (this.read === false) {
        return `${this.title} was written by ${this.author}. I haven't read it.`;
      } else {
        return `${this.title} was written by ${this.author}. I have read it.`;
      }
    },

    readBook() {
      this.read = true;
    }
  };
}

let book1 = createBook('Mythos', 'Steven Fry');
let book2 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse', true);
let book3 = createBook('Me Talk Pretty One Day', 'David Sedaris');

console.log(book1);
console.log(book2.getDescription());
console.log(book3.getDescription());