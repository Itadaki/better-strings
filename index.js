'use strict';

var check = require('./lib/check-allowed-types.js');

//add function to prototype
if (!String.prototype.format){
    String.prototype.format = function () {
        var base = this.toString();
        var args = Array.prototype.slice.call( arguments, 0 );

        if (!check.apply( this, args )){
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
}

module.exports = function(){

}
