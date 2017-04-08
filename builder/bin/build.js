#!/usr/bin/env node

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var builder = require('../index');
builder.start();
builder.prepare();
builder.update();
