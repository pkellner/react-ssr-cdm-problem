
const express = require('express');
const app = express();

app.use(express.static('public',{
    index: false
}));

import Renderer from './Renderer';
app.get('/', (req, res) => {
    const rendererInstance = Renderer(req);
        res.send(Renderer(req).htmlcode);
});

app.listen(3041, function () {
    console.log('Listening on port 3041');
});