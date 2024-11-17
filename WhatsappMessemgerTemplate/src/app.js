const express = require('express');
const app = express();
const templateRoutes = require('./routes/template.routes');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use('/api/templates', templateRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});