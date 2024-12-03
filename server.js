import http from 'http';

const server = http.createServer((request,response)=>{
    //respone.end("Hello World");
    response.end(JSON.stringify( {msg :  "Server is active"}));
});

const PORT = 4500;

server.listen(PORT,()=>{
    console.log("Server is listening",PORT);
})