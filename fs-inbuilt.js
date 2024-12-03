import fs from 'fs';

export const createFile = (folderPath, fileName, content, cbFn= () => {}) =>{
    //step-1: check if file path exist or create a new one
    if(!fs.existsSync(folderPath)){
        // create a new file
        fs.mkdir(folderPath, () => console.log ("folder created successfully"));  

    }
    // blocking type
    fs.writeFile(`${folderPath}/${fileName}`, content, cbFn);
};

createFile ('./series', 'strange-things1.txt', 'house of dargon',);

// get all the files in series folder
export const getFiles = (folderPath, successFn =() => {}, errorFn ) => {
    fs.readdir(folderPath, (err, data) =>{
        if(err){
            errorFn();
        } else successFn(data);
    });
};

getFiles("./series");