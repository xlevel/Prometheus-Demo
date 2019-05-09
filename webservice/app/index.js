const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');

const app = express();
const client = redis.createClient(6379, 'redis');

const port = 3000;

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(`Request: ${req.ip}`);
});

app.put('/orders', (req, res) => {
    if (req.body.orderId && req.body.orderValue) {
        console.log(`Order added: ${req.body.orderId} -> ${req.body.orderValue}`);
        client.set(req.body.orderId, req.body.orderValue, redis.print);
        res.send(200);
    }
    else {
        console.log(`Invalid order addition`);
        res.send(400);
    }
});

app.get('/orders/:orderId', (req, res) => {
    if (req.params.orderId) {
        client.get(req.params.orderId, function (error, result) {
            if (error) {
                console.log(error);
                throw error;
            }
            if (result) {
                console.log(`Order retrived: ${req.params.orderId} -> ${result}`);
                res.json({orderId: req.params.orderId, orderValue: result});
            }
        });
    }
    else {
        console.log(`Invalid order retrival`);
        res.send(404);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))