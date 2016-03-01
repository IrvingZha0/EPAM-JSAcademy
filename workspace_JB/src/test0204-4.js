'use strict';

var creature = {
	name : 'some thing',
	log : function  () {
		// body...
		console.log(this.name);
	}
}
var animal = Object.create(creature,{
    hiddenPower:{
    	enumerable:false,
        writable:true
        },
    showingPower:{
        enumerable:true,
        writable:true
        }
});
var dog = Object.create(animal,{
    legs:{
    enumerable:true,
    writable:true
	},
    furs:{
    enumerable:false,
    writable:true
    }
});

dog.gender = "female";

for( var protos in dog){
                console.log(protos);
}

//enumerable:true or false : using for...in loop, if could back the property

animal.name="lion";
animal.hiddenPower = "hideAnimal";
animal.showingPower ="showAnimal";
for( var prop in animal){
    console.log("prop:　"+ prop);
    //both father and his own property, not include the not enumerable
}
console.log(animal); //only his own and enumerable
var own = Object.getOwnPropertyNames(animal);
//his own properties including both en/noten
console.log("k: "+own);

var rKey= Object.keys(animal);
console.log("rKey:"+rKey);
