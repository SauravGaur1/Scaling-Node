const cpuNums = require('os').cpus().length;
const cluster = require('cluster');
const http = require('http');

if(cluster.isMaster) {

    // const server = http.createServer((req, res) => {
        
    //     const message  = `worker ${process.pid}...`;
    //     console.log(message);
        
    //     res.writeHead(200, {
    //         "Content-Type" : "application/json",
    //     });

    //     for(let i =0; i< 99999; i++) {
    //         for(let j =0; j< 99999; j++) {
            
    //         }
    //     }
    
    //     res.end(message);

    // }).listen(3000, ()=> {
    //     console.log('server started');
    // });

    console.log(`this is master process with PID : ${process.pid}`);
    for(let i =0 ;i < cpuNums; i++) {
        cluster.fork();
    }

} else {

    const server = http.createServer((req, res) => {
        
        const message  = `worker ${process.pid}...`;
        console.log(message);
        
        res.writeHead(200, {
            "Content-Type" : "application/json",
        });

        for(let i =0; i< 99999; i++) {
            for(let j =0; j< 99999; j++) {
            
            }
        }
    
        res.end(message);

    }).listen(3000, ()=> {
        console.log('server started');
    });

}