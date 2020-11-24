const EventEmitter = require('events');
const http = require('http');
const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
    constructor() {
        super();

    }
}

myEmitter.on('newSale', () => {
    console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
    console.log('Customer name: Jonas');
});

myEmitter.on('newSale', stock =>{
    console.log(`there are now ${stock} items left in stock`);
})

myEmitter.emit("newSale", 9);

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received!');
    res.end("request received");
})

server.on("request", (req, res) => {
    console.log("Another request lol");
})

server.on('close', (req, res) =>{
    console.log('Server closed');
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Waiting for requests.....");
})