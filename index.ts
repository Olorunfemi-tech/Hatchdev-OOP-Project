class Book{
    title: string;
    author: string;
   
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getDetails(): string{
        return `${this.title} by ${this.author}`;
    }
}

class Member{
   private name: string;
   private memberId: number;

    constructor(name: string, memberId: number) {
        this.name = name;
        this.memberId = memberId;
    }

    getMemberInfo(): string{
        return `Name: ${this.name}, Member Id: ${this.memberId}`;
    }
}

class Librarian extends Member{
    constructor(name: string, memberId: number) {
        super(name, memberId);
    }

    getMemberInfo(): string {
        return `Librarian ${super.getMemberInfo()}`
    }
}

const book1 = new Book("Othello", "William Shakespeare");
console.log(book1.getDetails());

const member1 = new Member("Angela", 1001);
console.log(member1.getMemberInfo());

const librarian = new Librarian("Mr Joe", 5001);
console.log(librarian.getMemberInfo());
