import arduino from '../managers/arduino.js'

export default async function listPorts(req, res, next) { 
    try {
        const connected = await arduino.cli.listConnectedBoards()
        const installed = await arduino.cli.listInstalledBoards()
        const cores = await arduino.cli.core.list()
        // res.json(boards)
        // next(boards)
        const boards = {
            connected,
            installed,
            cores
        }
        // console.log(res)
        console.log(boards)
        res.end(JSON.stringify(boards))
    } catch (ex) { 
        console.error(ex)
        next(ex)
        // res.code(500).json(ex)
    }
}