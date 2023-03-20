const { response } = require('express');
const { validationResult } = require('express-validator');

// Create
const createUser = (req, res = response) => {
  // Create user

  const { name, email, password } = req.body;

  res.status(201).json({ ok: true, msg: 'Register here', name, email, password });
};

// Login
const loginUser = (req, res = response) => {
  // Login User

  const { email, password } = req.body;

  res.json({ ok: true, msg: 'Login here', email, password });
};

// Renew Token
const revalidateToken = (req, res = response) => {
  res.json({ ok: true, msg: 'Renew here' });
};

module.exports = { createUser, loginUser, revalidateToken };
