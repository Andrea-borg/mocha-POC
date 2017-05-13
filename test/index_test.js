'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
//let server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('returns the homepage',(done) => {
        chai.request('http://www.chetri.co.uk/')
            .get('/')
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.contain('Make a bold statement');
                done();
        });
    });
});
