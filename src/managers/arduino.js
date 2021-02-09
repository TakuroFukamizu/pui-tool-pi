import arduinoCli from 'arduino-cli'
import path from 'path'
import { arduinoCliPath } from '../configs.js'

const ArduinoCli = arduinoCli.default;

class Arduino { 
    constructor() { 
       this.cli = ArduinoCli(path.join(arduinoCliPath, 'bin/arduino-cli'), {
            directories: {
                user: path.join(arduinoCliPath, 'sketches'),
                data: path.join(arduinoCliPath, 'data'),
            },
        });
        this.cli.version().then(console.log);
    }
    addBoard(packageUrl) { 
        
    }
}
const arduino = new Arduino()

export default arduino
