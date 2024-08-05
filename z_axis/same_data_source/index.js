const http = require('http');
const { LocalStorage } = require('node-localstorage');
let requests = 0;

const db = new LocalStorage('./data');

const server = http.createServer((req, res) =>{

    if(req.url == '/') {
        let requests = db.getItem('requests');
        db.setItem('requests',++requests);
        console.log(`process: ${process.pid} : ${requests} `);
        res.end(JSON.stringify(requests));
    }

})

server.listen(3000, () => {
    console.log('Server Started at localhost:3000');
})