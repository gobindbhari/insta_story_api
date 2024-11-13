import express from 'express'
import { postRouter } from './routes/postRoute.js'
import { userRouter } from './routes/userRoute.js'
import { db } from './db.js'
const app = express()
const port = 3000

app.use(express.json())

// router.route('/like').post
app.use('/user',userRouter)
app.use('/post',postRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})