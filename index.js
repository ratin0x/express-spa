const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3333

// This is the destination of the 'npm copy' and npm deploy' tasks,
// containing the built React SPA
app.use(express.static('backend'))
app.use(bodyParser.json())
app.use(cors())

app.post('/submitsurvey', (req, res) =>  {
  const { title, name, dob, currentLoc, currentDateTime, userFeedback } = req.body
  console.log('----------')
  console.log(`Title: ${title}`)
  console.log(`Name: ${name}`)
  console.log(`Date of Birth: ${dob}`)
  console.log(`Current Location: ${currentLoc}`)
  console.log(`Current Date/Time: ${currentDateTime}`)
  console.log(`Feedback: ${userFeedback}`)
  console.log('===========')
  res.status(200).send({ success: true})
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
