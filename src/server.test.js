const request = require('supertest');
const app = require('./server');

describe('supertest',()=>{
    it('demo',async()=>{
        const result=await request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200)
        expect(result.text).toEqual(JSON.stringify({nombre:"Jose",apellido:"Yañez"}))
    })
    
})