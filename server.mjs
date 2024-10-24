// server.js
import { createServer } from 'node:http';
import express from 'express';

const app = express();
const port = 3000;
const endpoint = "https://examplepoint.com";
const webhookEndpoint = "";

app.use(express.json());

// starts a simple http server locally on port 3000
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
})

app.post(`/`, (req, res) => {
 console.log(req.body);
 res.sendStatus(200);
})

app.get(`/`, (req, res) => {
 console.log(req.data);
})