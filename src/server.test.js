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
    /*it('res users',async()=>{
        await request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        //.expect('Content-Length', '15')
        .expect(200).then((response) => {
            expect(Array.isArray(response.body)).toBeTruthy()
			expect(response.body.length).toEqual(1)
			// Check the response data
			//expect(response.body[0]._id).toBe(post.id)
			//expect(response.body[0].title).toBe(post.title)
			//expect(response.body[0].content).toBe(post.content)
            //expect(res.body.nombre).toBeDefined();
            //expect(res.body.apellido).toBeDefined();
           });

    })*/
    
})