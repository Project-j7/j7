const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Health check route
app.get('/api/health', (req, res) => {
    if (mongoose.connection.readyState === 1) { // 1 means connected
        res.status(200).json({ status: 'MongoDB is connected' });
    } else {
        res.status(500).json({ status: 'MongoDB is not connected' });
    }
});

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
