const express = require('express');             // grab express package and import into document
const bodyParser = require('body-parser');

const port = 3001;

const app = express();              // this creates the server

app.use(express.static('assets'))
app.use(bodyParser.json());         // middleware, every request will be passed through this and give access to it as request.body



app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);

})

app.get('/messages', function (req, res, next) {
    res.status(200).json({ messages: messages });
    });


app.post('/messages', function (req, res, next) {
    messages.push({ message: req.body.message, 
                    time: new Date(), 
                    user: req.body.user });
    
                    res.status(200).json({ messages: messages });
    });

let messages = []


    

