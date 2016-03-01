/*var book = {
	title: 'the kings',
	pageCount: 450,
	authr: 'Irving'
	
}*/
/*book.title = 'speed 7';
book.coverColor = 'red';

delete book.pageCount;*/
var bookStore = [];
function createBook (title, pageCount, author){
	// body...
	var newBook = {
		title : title,
		pageCount : pageCount,
		author : author	
	};

	addBook(newBook);
}
function addBook (book) {
	// body...
	bookStore.push(book);
}
function findBook (titleOrAuthor) {
	// body...
	console.log('total have',bookStore.length,'books');
	for (var i = 0; i < bookStore.length; i++) {
		if (bookStore[i].title==titleOrAuthor||bookStore[i].author==titleOrAuthor) {
			console.dir(bookStore[i]);
		};
	};

}
createBook("Kings",100,"John");
createBook("Avater",200,"Mike");
createBook("Speed",300,"Yan");
createBook("Nonono",400,"Irving");


findBook("Mike");