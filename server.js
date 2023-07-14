const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Use bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});







// Connect to MongoDB Atlas database using your connection string
mongoose
  .connect('mongodb+srv://LiYan:Sic87ffkp8@cluster0.sjuu9y3.mongodb.net/leaderboards?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
  });

// Define leaderboard schema
const leaderboardSchema = new mongoose.Schema({
  
  points: {
    type: Number,
    required: true
  },
  wallet: {
    type: String,
    required: true,
    unique: true,
    sparse: true
  }
});

const Leaderboard = mongoose.model('leaderboards', leaderboardSchema);

// API endpoint for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});
// Serve the script.js file
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

// API endpoint for getting the leaderboard data
app.get('/leaderboard', async (req, res) => {
  try {
    const leaderboardData = await Leaderboard.find().sort({ points: -1 });
    res.send(leaderboardData);
  } catch (error) {
    console.log('Error getting leaderboard data:', error);
    res.status(500).send('Error getting leaderboard data');
  }
});

// API endpoint for adding new data to the leaderboard
app.post('/leaderboard', async (req, res) => {
  try {
    const existingEntry = await Leaderboard.findOne({ wallet: req.body.wallet });

    if (existingEntry) {
      console.log('Entry with the same wallet already exists.');
      return res.status(409).send('Entry with the same wallet already exists.');
    }

    const newLeaderboardEntry = new Leaderboard(req.body);
    await newLeaderboardEntry.save();
    res.send('New leaderboard entry added successfully');
  } catch (error) {
    console.log('Error adding new leaderboard entry:', error);
    res.status(500).send('Error adding new leaderboard entry');
  }
});

// API endpoint for updating an existing entry
app.put('/leaderboard/:id', async (req, res) => {
  try {
    const updatedEntry = await Leaderboard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedEntry);
  } catch (error) {
    console.log('Error updating leaderboard entry:', error);
    res.status(500).send('Error updating leaderboard entry');
  }
});

// API endpoint for deleting an existing entry
app.delete('/leaderboard/:id', async (req, res) => {
  try {
    await Leaderboard.findByIdAndRemove(req.params.id);
    res.send('Leaderboard entry deleted successfully');
  } catch (error) {
    console.log('Error deleting leaderboard entry:', error);
    res.status(500).send('Error deleting leaderboard entry');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
