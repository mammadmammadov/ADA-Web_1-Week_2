class Book {
    constructor(isbn, title, subtitle, author, published, publisher, pages, description, website) {
        this.isbn = isbn;
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.published = published;
        this.publisher = publisher;
        this.pages = pages;
        this.description = description;
        this.website = website;
    }

}

b1 = new Book("9781593279509", "Eloquent JavaScript, Third Edition", "A Modern Introduction to Programming", "Marijn Haverbeke",
         "2018-12-04T00:00:00.000Z", "No Starch Press", 472, "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
         "http://eloquentjavascript.net/")

b2 = new Book("9781491943533",
    "Practical Modern JavaScript",
    "Dive into ES6 and the Future of JavaScript",
    "Nicolás Bevacqua",
    "2017-07-16T00:00:00.000Z",
    "O'Reilly Media",
    334,
    "To get the most out of modern JavaScript, you need to learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
    "https://github.com/mjavascript/practical-modern-javascript"
  )

b3 = new Book("9781593277574",
    "Understanding ECMAScript 6",
    "The Definitive Guide for JavaScript Developers",
    "Nicholas C. Zakas",
    "2016-09-03T00:00:00.000Z",
    "No Starch Press",
    352,
    "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    "https://leanpub.com/understandinges6/read")
b4 = new Book( "9781449365035",
    "Speaking JavaScript",
    "An In-Depth Guide for Programmers",
    "Axel Rauschmayer",
    "2014-04-08T00:00:00.000Z",
    "O'Reilly Media",
    460,
    "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "http://speakingjs.com/")
b5 = new Book( "9781449331818",
    "Learning JavaScript Design Patterns",
    "A JavaScript and jQuery Developer's Guide",
    "Addy Osmani",
    "2012-08-30T00:00:00.000Z",
    "O'Reilly Media",
    254,
    "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/")

b6 = new Book( "9798602477429",
    "You Don't Know JS Yet",
    "Get Started",
    "Kyle Simpson",
    "2020-01-28T00:00:00.000Z",
    "Independently published",
    143,
    "The worldwide best-selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
    "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started")

b7 = new Book( "9781484200766",
    "Pro Git",
    "Everything you need to know about Git",
    "Scott Chacon and Ben Straub",
    "2014-11-18T00:00:00.000Z",
    "Apress; 2nd edition",
    458,
    "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
    "https://git-scm.com/book/en/v2")

b8 = new Book("9781484242216",
    "Rethinking Productivity in Software Engineering",
    "",
    "Caitlin Sadowski, Thomas Zimmermann",
    "2019-05-11T00:00:00.000Z",
    "Apress",
    310,
    "Get the most out of this foundational reference and improve the productivity of your software teams. This open-access book collects the wisdom of the 2017 'Dagstuhl' seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
    "https://doi.org/10.1007/978-1-4842-4221-6")

const booksInfo = [b1, b2, b3, b4, b5, b6];

const userInput = prompt('Enter the sorting criteria (e.g., isbn ASC or title DESC)');

if (!userInput) {
    console.log('Invalid input');
}

const [field, order] = userInput.split(' ');

if (!['title', 'isbn'].includes(field)) {
    console.log('Error: Invalid field for sorting');
}

function sortBooks(books, field, order) {

    // 1 -> a should come after b
    // -1 -> a should come before b
    //0 order should remain unchanged
    if (order === 'ASC') {
        return books.sort((a, b) => (a[field] > b[field]) ? 1 : ((a[field] < b[field]) ? -1 : 0));
    } else if (order === 'DESC') {
        return books.sort((a, b) => (a[field] < b[field]) ? 1 : ((a[field] > b[field]) ? -1 : 0));
    } else {
        console.log('Error: Invalid sorting order');
        return;
    }
}

const sortedBooks = sortBooks(booksInfo, field, order);

const sortedBooksJSON = JSON.stringify(sortedBooks, null, 2);
console.log(sortedBooksJSON);
