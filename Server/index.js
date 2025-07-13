const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

const dummyData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'sensor-data.json'), 'utf8')
);

let currentIndex = 0;

app.get('/api/sensor-data', (req, res) => {
  const data = dummyData[currentIndex];
  currentIndex = (currentIndex + 1) % dummyData.length;
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));