const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Docker!'));
app.listen(8080, () => console.log('App running on port 8080'));