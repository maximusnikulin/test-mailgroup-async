var asyncForEach = require('../asyncForEach/index.js');
var assert = require('assert');

describe('Test for asynForEach', function() {
    it('Entry - [1, 2, 3]', function(done) {
        var counter = 0,
            tests = [1, 2, 3];
        asyncForEach(tests, function (item, index, next) {
            assert.equal(index, counter);
            assert.equal(item, tests[counter]);
            counter++;
            setTimeout(next, 10);
        }).then(function () {
            done();
        });
    });
});