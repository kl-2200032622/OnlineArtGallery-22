const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:3000';

// Create a new MongoClient
const newUserMongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Now you can use newUserMongoClient to connect to MongoDB and perform operations
