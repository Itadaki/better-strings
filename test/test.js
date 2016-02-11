'use strict';

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var betterStrings = require('../index');
var checkAllowed = require('../lib/check-allowed-types');


describe('check allowed types lib', function() {

    it('should validate numbers', function() {
        checkAllowed(1).should.equal(true);
        checkAllowed(0.9).should.equal(true);
    });

    it('should validate strings', function() {
        checkAllowed('string').should.equal(true);
    });

    it('shouldn\'t validate booleans', function() {
        checkAllowed(true).should.equal(false);
        checkAllowed(false).should.equal(false);
    });

    it('shouldn\'t validate arrays', function() {
        checkAllowed([1,'string']).should.equal(false);
    });

    it('shouldn\'t validate objects', function() {
        checkAllowed({}).should.equal(false);
    });

    it('shouldn\'t validate functions', function() {
        checkAllowed(function(){}).should.equal(false);
    });

    it('shouldn\'t validate null', function() {
        checkAllowed(null).should.equal(false);
    });

    it('shouldn\'t validate undefined', function() {
        checkAllowed(undefined).should.equal(false);
    });

});

describe('string.format module', function() {

    describe('converts "{0} {1} {1} {2}" into "string 1 1 0.9"', function() {

        it('should convert "{0}" into "string"', function() {
            '{0}'.format('string').should.equal('string');
            betterStrings.format('{0}','string').should.equal('string');
        });

        it('should convert "{0}" into "1"', function() {
            '{0}'.format(1).should.equal('1');
            betterStrings.format('{0}',1).should.equal('1');
        });

        it('should convert "{0}" into "1"', function() {
            '{0}'.format(0.9).should.equal('0.9');
            betterStrings.format('{0}',0.9).should.equal('0.9');
        });

        it('shouldn\'t work with objects', function() {
            expect(function(){
                '{0} {1} {1} {2}'.format('string', 1, {});
                betterStrings.format('{0} {1} {1} {2}','string', 1, {});
            }).to.throw(TypeError);
        });

        it('shouldn\'t work with functions', function() {
            expect(function(){
                '{0} {1} {1} {2}'.format('string', 1, function(){});
                betterStrings.format('{0} {1} {1} {2}','string', 1, function(){});
            }).to.throw(TypeError);
        });

        it('shouldn\'t work with objects', function() {
            expect(function(){
                '{0} {1} {1} {2}'.format('string', 1, {});
                betterStrings.format('{0} {1} {1} {2}','string', 1, {});
            }).to.throw(TypeError);
        });

        it('shouldn\'t work with booleans', function() {
            expect(function(){
                '{0} {1} {1} {2}'.format('string', 1, false);
                betterStrings.format('{0} {1} {1} {2}','string', 1, false);
            }).to.throw(TypeError);
        });

        it('shouldn\'t work with null', function() {
            expect(function(){
                '{0} {1} {1} {2}'.format('string', 1, null);
                betterStrings.format('{0} {1} {1} {2}','string', 1, null);
            }).to.throw(TypeError);
        });

        it('shouldn\'t work with undefined', function() {
            expect(function(){
                '{0} {1} {1} {2}'.format('string', 1, undefined);
                betterStrings.format('{0} {1} {1} {2}','string', 1, undefined);
            }).to.throw(TypeError);
        });

        it('should convert "{0} {1} {1} {2}" into "string 1 1 0.9"', function() {
            '{0} {1} {1} {2}'.format('string', 1, 0.9).should.equal('string 1 1 0.9');
            betterStrings.format('{0} {1} {1} {2}','string', 1, 0.9).should.equal('string 1 1 0.9');
        });

    });

});
