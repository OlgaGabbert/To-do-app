import express from 'express'

const app = express()

const PORT = 3000

app.get('/', (request, response) => {
    response.send('Welcome to my To-do app!')
  })

app.listen(PORT, () => {
  console.log(`👋 Started server on port ${PORT}`)
})