'use strict'

function book(name, page){
	this.id = 0;
	this.name = name;
	this.page = page;
	this.setId = function(id){
		this.id = id;
	}
	this.getId = function(){
		return this.id
	}
}
function BookStore(){
	this.bookstore = [];
	this.initialId = 0;
	this.generateId = function(){
		return this.initialId++;
	};

	this.add = function(book){
		book.setId(this.generateId());
		this.bookstore.push(book);
	};

	this.remove = function(bookName){
		for (var i = 0;i< this.bookstore.length; i++) {
			if (this.bookstore[i].name === bookName) {
				this.bookstore.splice(i,1);
			};
		};
	};

	this.getBook=function(bookId){
		for (var i = 0;i< this.bookstore.length; i++) {
			if (this.bookstore[i].name===bookId) {
				return i;
			};
		};
	};

};

var bs = new BookStore();

bs.add(new book('the book',90));
bs.add(new book('the book',90));
bs.add(new book('the book',90));
console.log(bs.bookstore);
