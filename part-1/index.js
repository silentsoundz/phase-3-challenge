const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/days/:day', (request, response) => {
  let day = request.params.day.toLowerCase()
  let daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }
  !daysOfWeek[day] ?
  response.status(400).send(`response: '${day}' is not a valid day!`) :
  response.status(200).send(`response: ${daysOfWeek[day]}`)
})

app.post('/api/array/concat', (request, response) => {
  const {array1, array2} = request.body
  //object deconstruction es6
  // const array1 = request.body.array1
  // const array2 = request.body.array2
  !Array.isArray(array1 || array2) ? response.status(400).json({'error': 'Input data should be of type Array.'}) : result = array1.reduce((acc, value, index) => {
    return acc.concat(value, array2[index])
  }, [])
  response.status(200).json({result}) //destructuring from {"result": result}
})




app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})