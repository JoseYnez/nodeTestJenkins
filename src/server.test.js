const request = require('supertest');
const app = require('./server');

describe('user',()=>{
    it('res users',async()=>{
        await request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        //.expect('Content-Length', '15')
        .expect(200)
        //expect(result.text).toEqual(JSON.stringify([{nombre:"Jose",apellido:"Yañez"}]))
    })
    it('get users',async()=>{
        await request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        //.expect('Content-Length', '15')
        .expect(200).then((res) => {
            expect(Array.isArray(res.body)).toBeTruthy()
            if(res.body.length>0){
                res.body.forEach(element => {
                    expect(element.nombre).toBeDefined();
                    expect(element.apellido).toBeDefined();
                });
            }            
           });

    })
    
})