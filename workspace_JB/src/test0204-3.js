var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());  
 
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort());  

 
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
 
//un-
var my_obj = Object.create({}, {
  	getFoo: {
   	 value: function() { 
   		 	return this.foo;
  		  },
    enumerable: false
  }
});

my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); 