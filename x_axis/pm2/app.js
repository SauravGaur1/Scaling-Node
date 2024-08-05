const http = require('http')
const port = parseInt(process.argv[2] || 3000);

const options = [
    "Go for it!",
    "Maybe sleep on it.",
    "Do some more research",
    "I don't know",
    "I wouldn't"
];

const server = http.createServer((req, res) => {
    const randomIndex = Math.floor(Math.random() * options.length)
    const payload = JSON.stringify({
        port,
        processID : process.pid,
        advise: options[randomIndex],
    })

    res.writeHead(200, {
        "Content-Type" : "application/json",
    });

    res.end(payload);
}).listen(port, ()=> {
    console.log('server started');
});


// reminder :: pm2 is a node_module for scalling apps in production
// check pm2 -h for commands help
// pm2 is alreay installed globally (on my local pc you may need to install it first), --
// --> use pm2 start <server_file.js> -i <instances_count>