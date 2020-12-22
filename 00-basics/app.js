//Mod2 ex1
// var logger = require('./logger');
// // logger.log(module)
// logger.newname("hello there")
// // console.log(__filename)
// // console.log(__dirname)
////////////////////////////////////////
//===>> PATH MODULE
// const path = require('path');
// console.log(path)
// const pathObj = path.parse(__dirname);
// console.log(pathObj);
// let directory = pathObj.dir;
// console.log(typeof(directory))
// console.log("directory =",directory)

///////////////////////////////////////////////
// =====> OS MODULE
// const os = require('os')
// var free_memory = os.freemem(); 
// var free_mem_in_kb = free_memory/1024; 
// var free_mem_in_mb = free_mem_in_kb/1024; 
// var free_mem_in_gb = free_mem_in_mb/1024;

// free_mem_in_kb = Math.floor(free_mem_in_kb); 
// free_mem_in_mb = Math.floor(free_mem_in_mb); 
// free_mem_in_gb = Math.floor(free_mem_in_gb); 
   
// // free_mem_in_mb = free_mem_in_mb%1024; 
// // free_mem_in_kb = free_mem_in_kb%1024; 
// // free_memory = free_memory%1024; 
  
// console.log("Free memory: " + free_mem_in_gb + "GB "
//       + free_mem_in_mb + "MB " + free_mem_in_kb 
//       + "KB and " + free_memory + "Bytes"); 

////////////////////////////////////
// ====> File System Module fs
// const fs = require('fs');
// console.log(fs);

//synchronous

// const files = fs.readdirSync('./mod2/')
// console.log(files)

//Async USE THIS BECAUSE THIS IS ASYNC AND NON BLOCKING

// fs.readdir('/home/ravi/Documents',function(err,files){
//     if(err) console.log('Error = ',err);
//     else console.log(files)
// });

// fs.readdir('/home/ravi/practice/',function(err,files){
//     if(err) console.log(err);
//     else{
//         console.log(files)
//     }
// })
/////////////////////////////////////////////////////////
