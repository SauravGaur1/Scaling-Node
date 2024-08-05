const cpuNums = require('os').cpus().length;
const cluster = require('cluster');
const http = require('http');

if(cluster.isMaster) {

    console.log(`this is master process with PID : ${process.pid}`);
    for(let i =0 ;i < cpuNums; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`${process.pid} died.`);
        console.log(`only ${Object.keys(cluster.workers).length} remaning.`);
        console.log(`restarting worker...`);
        cluster.fork();
    })

} else {

    const server = http.createServer((req, res) => {
        
        const message  = `worker ${process.pid}...`;
        console.log(message);
        
        res.writeHead(200, {
            "Content-Type" : "application/json",
        });

        res.end(message);

        if(req.url == '/kill') {
            process.exit(0);
        }
    
    }).listen(3000, ()=> {
        console.log('server started');
    });

}