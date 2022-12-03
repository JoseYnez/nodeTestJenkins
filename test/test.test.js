const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', async (req, res)=> {
  res.status(200).json({ name: 'johns' });
});

describe('supertest',()=>{
    it('demo',async()=>{
        const result=await request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200)
        expect(result.text).toEqual(JSON.stringify({name:"john"}))
    })
    
})
