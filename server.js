const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing body dari request
app.use(express.json());

// Contoh data
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

// Endpoint untuk mendapatkan semua pengguna
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint untuk mendapatkan pengguna berdasarkan ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Endpoint untuk menambahkan pengguna baru
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).send('User added successfully');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
