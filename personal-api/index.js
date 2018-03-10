const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    console.log('REQ BODY', req.body);
    console.log('REQ QUERY', req.query);
    console.log('REQ PARAMS', req.params);
    next();
});


var main_ctrl = require('./controllers/main_ctrl.js');

app.get('/name', main_ctrl.getName)
app.get('/location', main_ctrl.getLocation)

app.get('/occupations', main_ctrl.getOccupations)
app.get('/occupations/latest', main_ctrl.getOccupationsLatest)

app.get('/hobbies', main_ctrl.getHobbies)
app.get('/hobbies/:type', main_ctrl.getHobbiesType)

app.get('/family', main_ctrl.getFamily)
app.get('/family/:gender', main_ctrl.getFamilyGender)

app.get('/restaurants', main_ctrl.getRestaurants)
app.get('/restaurants/:name', main_ctrl.getRestaurantName)

app.put('/name', main_ctrl.putName)
app.put('/location', main_ctrl.putLocation)

app.post('/hobbies', main_ctrl.postHobbies)
app.post('/occupations', main_ctrl.postOccupations)










app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})