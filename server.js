const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Parse form data

// Temporary in-memory storage for messages
let messages = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { messages });
});

app.post('/message', (req, res) => {
    const { text, user } = req.body;
    messages.push({ text, user, date: new Date() });
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
