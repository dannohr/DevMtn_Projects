const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const {dbUser, dbPass, database} = require('./config')
const connectionString = `postgres://${dbUser}:${dbPass}@localhost/${database}`

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const massiveConnection = massive(connectionString)
.then(db => {
    app.set('db',db); 
})


.catch(err => {
    console.log(err)
})


const productsCtrl = require ('./productsCtrl')   //This has to be after the app declaration above

app.get('/api/products', productsCtrl.getAll)
app.get('/api/product/:id', productsCtrl.getOne)
app.put('/api/product/:id', productsCtrl.update)
app.post('/api/product', productsCtrl.create);
app.delete('/api/product/:id', productsCtrl.remove);









const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );