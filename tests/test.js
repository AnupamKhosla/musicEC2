'use strict';

//convert requires to imports
import supertest from 'supertest';
import test from 'unit.js';
import app from '../app.js';

console.log(process.env);
//throw new Error("Test Error");


const request = supertest(app);
describe('Tests app', function() {
  it('verifies get', function(done) {
    request.get('/').expect(200).end(function(err, result) {
      test.string(result.text).contains('Congratulations');
      test.value(result).hasHeader('content-type', 'text/html; charset=UTF-8');
      done(err);
    });
  });
});
