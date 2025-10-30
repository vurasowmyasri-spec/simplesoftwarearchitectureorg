// Simple Express server for Pet Adoption app
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'db',        // matches service name in docker-compose.yml
  user: 'user',
  password: 'password',
  database: 'petsdb'
});
// Retry database connection until MySQL is ready
function connectWithRetry() {
  db.connect((err) => {
    if (err) {
      console.error('❌ Database connection failed, retrying in 5 seconds...', err.code);
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('✅ Connected to MySQL database');
    }
  });
}
connectWithRetry();

// Connect to the database
//db.connect((err) => {
//  if (err) {
//    console.error('❌ Database connection failed:', err);
//    process.exit(1);
//  }
//  console.log('✅ Connected to MySQL database');
//});

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Pet Adoption API!');
});

// Endpoint to get all pets
app.get('/pets', (req, res) => {
  db.query('SELECT * FROM pets', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Database error');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
