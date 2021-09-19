const express = require('express');
const cors = require('cors');

const PORT = 8080;

const app = express();

app.use(cors());

  
app.use('/login', (req, res) => {
    res.send({token: '1234567890'})
});

app.get('/', (req, res) => {
    res.send('Successful response');
});

app.listen(PORT, () => console.log('Backend app is listening on port ' + PORT));