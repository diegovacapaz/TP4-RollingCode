class Book{
    constructor(isbn,title,author,pages){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    getISBN(){
        return this.isbn;
    }
    setISBN(isbn){
        this.isbn = isbn;
    }
    getAuthor(){
        return this.author;
    }
    setAuthor(author){
        this.author = author;
    }
    getPages(){
        return this.pages;
    }
    setPages(pages){
        this.pages = pages;
    }
    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }
    showBook(){
        return `El libro ${this.title} con ISBN ${this.isbn} creado por el autor ${this.author} tiene ${this.pages} páginas`;
    }
}
const book1 = new Book(1234567891234,"El Señor de los Anillos: Las Dos Torres","J.R.R. Tolkien",894);
const book2 = new Book(9876543219874,"Protocolos de comunicación en Internet","S.D. Saade",654);
console.log(book1.showBook());
console.log(book2.showBook());
if(book1.getPages() > book2.getPages()){
    console.log(`${book1.getTitle()} tiene mas páginas que ${book2.getTitle()}`);
}
else{
    console.log(`${book2.getTitle()} tiene mas páginas que ${book1.getTitle()}`);
}