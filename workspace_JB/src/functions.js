'use strict';
/*
var _name = 'Jack';

function name(){
	if(arguments.length==0){
		return getName();
	}
	else{
		return getName(setName(arguments[0]));
	}
}
function setName(name){
	_name = name;
}

function getName(){

	return _name ;
}
console.log(name()); // Jack
console.log(name('Peter')); //Peter
console.log(name()); // peter
console.log(name(null)); //should set the name to null*/

/*function add (a, b) {
	// body...
	return a + b;
}

var add = function(a, b){
	return a + b;
}

if (typeof add !== 'function') {
	console.log('should be a function.');
};

console.log(add.length);
console.log(typeof add());
console.log(typeof typeof add);*/
/*var books = [
	{
		title :'kings',
		pageCount : 400
	},
	{
		title :'eleven rings',
		pageCount : 500
	},
	{
		title :'NBA',
		pageCount : 200
	},
]
	
function findBiggestBook(books){
	var max = books[0];
	for (var i = 0; i <books.length; i++) {
		var book = books[i];
		if (book.pageCount > max.pageCount) {
			max = book;
		};
	}
	return max;
}		
console.log(findBiggestBook(books));	*/

var numbers = ['1px','3px','2px','4px','6px','3px','2px'];
var arr = numbers
.map(function(it){
	return parseInt(it);
})
.filter(function(it){
	return !(it % 2);
})
.reduce(function(sum, value){
	return sum + value;
}, 0)
console.log(arr);