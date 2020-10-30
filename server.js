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
//All Messages
app.get('/messages', function(request, response) {
  response.json(messages);
});
//Message get by Id
app.get('/messages/:id', function(request, response) {
     const Id = request.params.id;
     const getMessage = messages.find(item => item.id == Id);
     response.json(getMessage);
});
//Message get by text Query
app.put('/messages/search', function(request, response) {
  const Input = request.query.input;
  response.json(messages.filter(item => item.input.includes(Input)));  
});




app.listen(process.env.PORT);
