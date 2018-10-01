const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./dist/client'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/client/index.html'));
})
app.listen(port, () => console.log('Server started on port ' + port));
