var BaseCalculator = function() {
 
};

BaseCalculator.prototype = {
    
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    devide: function(x, y) {
        return x / y;
    }
};
console.log(BaseCalculator.prototype.add(2, 3));
console.log(BaseCalculator.prototype.subtract(2, 3));
console.log(BaseCalculator.prototype.multiply(2, 3));
console.log(BaseCalculator.prototype.devide(15, 0));

