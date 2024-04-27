const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser'); // Middleware for parsing request data
const app = express();
const port = 3000;
// Connection URI
//const uri = ('mongodb://localhost:27017/artgallery');
const uri =("mongodb+srv://admin:admin@cluster0.knegugz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Connect to the MongoDB server
client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  // Now you can use the MongoDB client
  const db = client.db('mernsdp');
  async function connectToDatabase() 
  {
    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      return client.db('mernsdp');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    }
  }
  // Use bodyParser middleware to parse request data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Handle GET request for the signup page
app.get('/LoginSignup', (req, res) => {
  res.send('LoginSignup Page'); // You can render an HTML form here
});
// Handle POST request for user registration
app.post('/Login', (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    // Add other user data here
  };
  createUserAndRedirect(newUser, res);
});
// Handle GET request for the login page
app.get('/login', (req, res) => {
  res.send('Login Page'); // You can render an HTML login form here
});
// Start the server and listen on the specified port
(async () => {
  await connectToDatabase();
  app.listen(port, () => {
    console.log('Server is running on port 8080');
  });
})();
});
