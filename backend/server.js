// importing
const express = require('express');
const mongoose = require('mongoose');
const Messages = require('./dbMessages');
const { db } = require('./dbMessages');
const { dbR } = require('./dbRooms');
const Pusher = require("pusher");
const cors = require('cors');
const dotenv = require("dotenv");

// const Rooms = require('./dbRooms');
dotenv.config({ path: './config.env' });
// app config
const app = express();
const port = process.env.PORT;

const pusher = new Pusher({
    appId: "1400305",
    key: "491329ef75a600c28d8c",
    secret: "7bfcb1bbc5f2a481437a",
    cluster: "ap2",
    useTLS: true
});

// middleware
app.use(express.json());
app.use(cors());

// DB config
const connection_url = process.env.MONGO_URL;

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const db = mongoose.connection;

db.once('open', () => {
    console.log('Database connected');

    const msgCollection = db.collection('msgcontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log('A Change occured', change);

        if (change.operationType == 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        } else {
            console.log('Error triggering Pusher');
        }
    });
});

// api routes
app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/messages/sync', (req, res) => {

    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessages = req.body

    Messages.create(dbMessages, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, () => {
    console.log(`the server is running on localhost:${port}`)
})