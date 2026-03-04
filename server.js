// server.js
const express = require('express');
const cors = require('cors'); // allow cross-origin requests
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/location', (req, res) => {
  const { lat, lng, timestamp } = req.body;
  console.log(`Location received: ${lat}, ${lng} at ${new Date(timestamp).toISOString()}`);

  // Save to file
  fs.writeFileSync('last_location.json', JSON.stringify({ lat, lng, timestamp }, null, 2));

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});