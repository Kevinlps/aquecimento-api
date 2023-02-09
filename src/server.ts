import  express  from 'express'
import cors from 'cors'
import logger from 'morgan'

//cria um novo app express
const app = express()
//deixa todos os serviços publicos
app.use(cors())

//serviços (ou endpoints)
app.get('/pi', (req, res)=>{
    const valorPI = Math.PI
    return res.status(200).json({ pi: valorPI})
})

//da logs mais detalhados
app.use(logger('dev'))
//levanta o servidor 
app.listen(3000, ()=> console.log('Server is running'))
