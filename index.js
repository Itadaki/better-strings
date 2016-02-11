'use strict';

var check = require('./lib/check-allowed-types.js');

//expect to receive allowed types args
var format = function () {
    var args = Array.prototype.slice.call( arguments, 0 );
    var base = args.splice(0, 1)[0];
    if (typeof base !== 'string' || !check.apply( this, args )){
        throw new TypeError('One of the arguments suplied is not from an allowed type');
    }

    //replace placeholders with args
    args.forEach(function(element, index, arr){
        var exp = '\{('+index+')\}';
        var re = new RegExp(exp, 'g');
        base = base.replace(re, element);
    });
    return base;
};

//add function to prototype
if (!String.prototype.format){
    String.prototype.format = function(){
        var args = Array.prototype.slice.call( arguments, 0 );
        args.unshift(this.toString());
        return format.apply(this, args);
    };
}

module.exports = {
    //expects to take at least 2 args, first a string-type
    format: function(){
        var args = Array.prototype.slice.call( arguments, 0 );
        var base = args[0];
        if(typeof base === 'string'){
            return format.apply( this, args );
        } else {
            throw new TypeError('First argument is not an string!');
        }
    }
};
