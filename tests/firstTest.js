var test = require('tape'),
	fileToTest = require('../fileToTest');

'use strict';

test('first test', function(t) {
	t.pass('hi');
	t.end();
});

test('first calculate test', function(t) {
	var returnValue = fileToTest.calculate('hi');
	t.equal(returnValue, 'hi', 'does calculate return first arg?');
	t.end();
});