//Define a const that takes the express library
const express = require('express');
//Assign the express library to a const
const app = express();
//Define a port
const PORT = 80;
//Assign timestamp to the date function
const timestamp = Date.now();

//Sends the json response to the html package
app.get("/", (req, res) => {
  res.json({
    message: 'My name is Jordan Silva',
    timestamp: timestamp
  })
});

//Listens for port
app.listen(PORT);

//Listens for port and sends a cmdline statement verifing the port is open
//DEBUGGING Purposes
// app.listen(PORT, function() {
//   console.log("Server listening on Port", PORT);
// });
