const { fstat } = require('fs');
const http = require('http');
const fs = require('fs');
const { RSA_NO_PADDING } = require('constants');

const server = http.createServer((req, res) => {

    console.log('server is up and running!');

    console.log(req.url);

    // now we will serve the pages from the server as following 

    // you can just create the server like this and can start serving - no one is stoping you :)
    let dir = './views'
    let path;
    switch (req.url) {
        case '/':
            path = 'index.html';
            break;
        case '/about.html':
            path = 'about.html';
            break;
        default:
            path = '404.html';
            break;
    }


    fs.readFile(`${dir}/${path}`, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        }
        res.end(data);
    })

});



server.listen(3322, () => { console.log('server is up and running!'); })