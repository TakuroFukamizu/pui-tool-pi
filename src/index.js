import path from 'path';
import arduinoCli from 'arduino-cli';

const ArduinoCli = arduinoCli.default;
const cli = ArduinoCli('.arduino-cli/bin/arduino-cli', {
    directories: {
        user: '.arduino-cli/sketches',
        data: '.arduino-cli/data',
    },
});
cli.version().then(console.log);