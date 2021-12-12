const http = require('http');

const server = http.createServer( (req,res) => {
    if(req.url === '/'){
        res.write('Welcome to our Home Page!')
    }
    else if(req.url === '/about'){
        res.write('Welcome to our About Page!')
    }
    else{
    
    res.write(`
    <h1>Not found</h1>    
`)   
    }
    res.end()
});


server.listen(5000);