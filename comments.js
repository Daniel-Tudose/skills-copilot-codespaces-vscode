// Create web server
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const { Pool } = require('pg');
const pool = new