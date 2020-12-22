const Logger = require('./logger2.js');
const logger = new Logger();

logger.on('code505',(data)=>{
    console.log(`Add me on discord ${data.name}#${data.id} :)`);
})

logger.log('loging...');