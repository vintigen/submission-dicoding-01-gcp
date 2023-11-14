//by Oscar David Bungaa

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/styles.css', express.static(__dirname + '/styles.css'));

app.use('/foto-profil.jpeg', express.static(__dirname + '/foto-profil.jpeg'));

const server = app.listen(process.env.PORT || 8080, () =>{
    const host = server.address().address;
    const port = server.address().port;
    
    console.log('Server listening at http://localhost:${port}');
})
;