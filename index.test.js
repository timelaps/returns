var b = require('@timelaps/batterie');
var returns = require('.');
b.describe('returns', function () {
    b.expect(returns).toBeFunction();
    b.expect(returns).toBe(require('./passed'));
});