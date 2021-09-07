const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;

const db = [
            {
            "title":"Test Title",
            "text":"Test text"
            }
]

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('/api/notes', (req, res) => {
    return res.json(db);
  });

  app.post('/api/notes', (req, res) => {
    const newDb = req.body;
  
    console.log(newDb);
  
    db.push(newDb);
  
    res.json(newDb);
  });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//npm run dev