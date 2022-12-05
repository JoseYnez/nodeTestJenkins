const request = require('supertest');
const app = require('../server');

describe('user',()=>{
    test('get users',async()=>{
        await request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        //.expect('Content-Length', '15')
        .expect(200)
        .then((res) => {
            console.log(res.body);
            expect(res.body.total).toBeDefined();
            expect(res.body.usuarios).toBeDefined();
           });

    })
    
})