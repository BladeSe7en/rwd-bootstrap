const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(process.env.PORT || 3000);