const assert = require('assert');
const {callAPI} = require('../src/App.js')

describe('Fetch', function(){
    describe('#callAPI()', function(){
        it('should call fetch when invoked', function(){
            return callAPI()
        })
    })
})