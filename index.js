const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('backend'))
app.use(bodyParser.json())
app.post('/submitsurvey', (req, res, next) =>  {
  const { title, name, dob, currentLoc, currentDateTime, userFeedback } = req.body
  console.log('----------')
  console.log(`Title: ${title}`)
  console.log(`Name: ${name}`)
  console.log(`Date of Birth: ${dob}`)
  console.log(`Current Location: ${currentLoc}`)
  console.log(`Current Date/Time: ${currentDateTime}`)
  console.log(`Feedback: ${userFeedback}`)
  res.status(200).send({ success: true})
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
