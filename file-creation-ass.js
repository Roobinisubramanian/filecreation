import express from 'express';

import { createFile, getFiles } from "./fs-inbuilt.js";

const server = express();



//post 
server.post("/create-file",(req,res) => {

    const date = new Date();
    const timestamp = date.getTime().toString();
    const isoDateTime = date.toISOString().replaceAll(":","-").split(',')[0];

    createFile("./api-files", `${isoDateTime}.txt`, timestamp, () => {
        res.status(201).json({ msg: "Created file successfully"})
    })
    
});

// get files
server.get("/get-files", (req,res) => {
    getFiles(
        "./api-files", (data) => res.json(data),
        () => res.status(500).json( { msg: "something went wrong" })
    );
})

const PORT = 4500;
server.listen(PORT, () => {
    console.log("server listening port 4500", PORT)
} );

