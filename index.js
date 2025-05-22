var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getDetails = function () {
        return "".concat(this.title, " by ").concat(this.author);
    };
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(name, memberId) {
        this.name = name;
        this.memberId = memberId;
    }
    Member.prototype.getMemberInfo = function () {
        return "Name: ".concat(this.name, ", Member Id: ").concat(this.memberId);
    };
    return Member;
}());
var Librarian = /** @class */ (function (_super) {
    __extends(Librarian, _super);
    function Librarian(name, memberId) {
        return _super.call(this, name, memberId) || this;
    }
    Librarian.prototype.getMemberInfo = function () {
        return "Librarian ".concat(_super.prototype.getMemberInfo.call(this));
    };
    return Librarian;
}(Member));
var book1 = new Book("Othello", "William Shakespeare");
console.log(book1.getDetails());
var member1 = new Member("Angela", 1001);
console.log(member1.getMemberInfo());
var librarian = new Librarian("Mr Joe", 5001);
console.log(librarian.getMemberInfo());
