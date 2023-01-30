// importing packages
const express = require('express');
const cors = require('cors')
const app = express();


const fixtures = require('./routes/fixtures');
const liveScore = require('./routes/liveScore');

// middlewares
app.use(express.json());
app.use(cors())


//  adding routes
app.use('/fixtures', fixtures);
app.use('/liveScore', liveScore);


/* app.get('/hello', function(req, res){
    console.log(res)
}) */

// port 
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));