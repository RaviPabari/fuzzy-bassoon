const EventEmitter = require('events')
const emitter = new EventEmitter();

class Logger extends EventEmitter{
    log(message){
        let data = {
            id:9635,
            name : 'dragon!'
        }
        console.log(message);
        //Raising event
        this.emit('code505',data);
    }
}
//exporting the class Logger
module.exports = Logger;