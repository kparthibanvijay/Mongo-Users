const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
    it('requires user name', (done) => {
        const user = new User({ user: undefined });
        const validationResult = user.validateSync();
        
        //console.log(validationResult.errors.name.message);
        const { message } = validationResult.errors.name;
        assert(message === 'user name is required');
        done();
    });
});