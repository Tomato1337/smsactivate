import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.post('/webhook', (req, res) => {
    console.log('Received webhook:', req.body)
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
