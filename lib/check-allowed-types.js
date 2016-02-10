'use strict';

var checkAllowedTypes = function (){
    var allowedTypes = ['string', 'number'];
    var args = Array.prototype.slice.call( arguments );
    var allowed = true;
    //check all are allowed types
    try{
        args.forEach(function(element, index, arr){
            if(allowedTypes.indexOf(typeof element) == -1){
                throw new Error();
            }
        });
    } catch(e){
        allowed = false;
    } finally {
        return allowed;
    }
};

module.exports = function(){
    var args = Array.prototype.slice.call( arguments );
    return checkAllowedTypes.apply( this, args );
};
