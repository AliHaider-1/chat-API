const express = require("express");
const cors = require('cors')

const app = express();

app.use(cors())

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage]


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/message', function(request, response) {
  response.json(messages);
});
app.get('/message/:id', function(request, response) {
     const Id = request.params.id;
     const getMessage = welcomeMessage.find(item => item.id == Id);
     response.json(getMessage);
});





app.listen(process.env.PORT);
