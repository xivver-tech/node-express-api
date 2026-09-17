const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Express!',
    time: new Date().toISOString(),
    tip: 'Try /api/greet?name=YourName'
  });
});

app.get('/api/greet', (req, res) => {
  const name = req.query.name || 'stranger';
  res.json({ greeting: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
