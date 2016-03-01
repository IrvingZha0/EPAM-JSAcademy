'use strict'

var creature = {
	name : 'some thing',
	log : function  () {
		// body...
		console.log(this.name);
	}
}

var getAllPrototype = function(obj){
	while(Object.getPrototypeOf(obj)!=null){
		obj = Object.getPrototypeOf(obj);
		console.log(obj);
	}
}

/*var goblin = Object.create(creature);*/

/*console.log(Object.getPrototypeOf(goblin));
console.log(this.name);
console.log(goblin);*/
var x = Object.create(creature);
var y = Object.create(x);
getAllPrototype(y);

