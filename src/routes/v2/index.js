const { auth } = require('../../helpers');
const express = require('express');

const register = require('./register');
const login = require('./login');
const profile = require('./profile');
const data = require('./data');

const v2 = express.Router();

v2.use('/customer/register', register);
v2.use('/customer/login', login);
v2.use('/customer/profile', auth, profile)
v2.use('/data', data);

module.exports = v2;

