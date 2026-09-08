// Importing nodeJS
const http = require('http');

// Importing file system 
const fs = require('fs');

// Creating the server
const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.write(`<h1>This is Assignment 6 testing URL</h1>`);
        return res.end();
    }
    // for home page
    else if(req.url === '/home'){ 
        fs.readFile('home.html', (err, data) => {
            if(err){  // show the error
                res.write('Error loading Home Page'); 
                return res.end(); 
            }
            res.write(data); // this is the dat
            return res.end();
        });
    }
    // for about page
    else if(req.url === '/about'){
        fs.readFile('about.html', (err, data) => {
            if(err){ 
                res.write('Error loading About Page'); 
                return res.end(); 
            }
            res.write(data);
            return res.end();
        });
    }
    // for contact page
    else if(req.url === '/contact'){
        fs.readFile('contact.html', (err, data) => {
            if(err){ 
                res.write('Error loading Contact Page'); 
                return res.end(); 
            }
            res.write(data);
            return res.end();
        });
    }
    // service page
    else if(req.url === '/service'){
        fs.readFile('service.html', (err, data) => {
            if(err){ 
                res.write('Error loading Service Page'); 
                return res.end(); 
            }
            res.write(data);
            return res.end();
        });
    }
    // for connection to css styling
    else if(req.url === '/style.css'){
        fs.readFile('style.css', (err, data) => {
            if(err){ 
                res.write('Error loading CSS File'); 
                return res.end(); 
            }
            res.write(data);
            return res.end();
        });
    }
    // if another url serach then show this 
    else{
        res.write('<h1>404 Page Not Found</h1>');
        return res.end();
    }

});

// PORT number
const PORT = 3000;

// Running the server
server.listen(PORT, () => {
    console.log(`Assignment-6 server is running on http://localhost:${PORT}`);
});
