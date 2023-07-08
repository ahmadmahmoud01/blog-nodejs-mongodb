const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    const num = _.random(1, 10);
    console.log(num);

    // set header content type
    res.setHeader('Content-Type', 'text/html')    
    res.write('<header><title>Node JS Course</title></header>')

    let path = './views/';

    if(req.url == '/') {
        path += 'index.html';
        res.statusCode = 404;
    } else if(req.url == '/about') {
        path += 'about.html';
        res.statusCode = 200;
    } else if (req.url == '/about-me'){
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
    } else {
        path += '404.html'
        res.statusCode = 404; 
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });
    

});

server.listen(3000, 'localhost', () => {
    console.log('listening to port 3000....');
});