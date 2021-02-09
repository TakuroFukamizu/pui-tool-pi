import path from 'path'
import connect from 'connect'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
import listPorts from './controller/listPorts.js'
import { port, publicRoot } from './configs.js'
import arduino from './managers/arduino.js'

const main = async () => { 
    const packages = [
        'https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json'
    ]
    await arduino.cli.setPackageIndexUrls(packages)
    await arduino.cli.core.updateIndex()
    
    console.log(publicRoot)
    
    const app = connect()
        // .use(connect.logger('dev'))
        .use('/api/ports', listPorts)
        .use(serveStatic(publicRoot))
        .use(history())
        .listen(port);
    console.log('Server has started at http://localhost:' + port)
}
main()
