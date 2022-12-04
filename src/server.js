require('dotenv').config()
const express = require('express')
const app = express()
const router=express.Router()
const port = process.env.PORT
app.use(router)
router.get('/user',(req,res)=>{
    let user={nombre:"Jose",apellido:"Yañez"}
    return res.status(200).send(user)
})
router.get('*',(req,res)=>{
  return res.status(200).send("TE AMO CORAZON, ¿TE CASAS CONMIGO? okno aun es pronto")
})
app.listen(port, () => {
  console.log(`Server listen in port ${port}`)
})
