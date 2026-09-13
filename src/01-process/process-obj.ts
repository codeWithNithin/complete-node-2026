// process: the current running nodejs process

//  we can have data that we need during run-time...
// for ex: the env variables... the details will be stored in the OS... not in the working file so that
// the secret infos are safe..

// command line arugments

// exit code

// process life cycle events


// to import the process

// for commonjs
// import process = require("node:process");

// for esm
import process from "node:process";

// we store the env variables in 
process.env

const env = process.env.NODE_ENV ?? 'dev'

// dont keep env variables in the dev files

// env values are string or undefined only...

const PORT = Number(process.env.PORT) || 3000

// for command line arguments, and for the custom command line argument, we fetch from argv[2]


// process.arg
// [
//     "/path/to-to-node",
//     "/path/to-your-file",
//     "custom-arugment"
// ]

// first 2 are reserved...

const command = process.argv[2] || 'start'

// take 2 flags, fail and crash

const shouldFail = process.argv.includes('--fail')
const shouldCrash = process.argv.includes('--crash')

// event, do not start async, only for synchronous..
// node is already shutting dowm, so dont use async
// for final log, or for final cleanup..
process.on('exit', (code) => {
    // code 0 => success, 1 => failiure
  console.log(`process exited with ${code}`)
})

function runApp():void {
    console.log({command})

    if(shouldFail) {
        console.error('Manual fail triggered with --fail flag')
        process.exit(1) // 1 => failure
    } 

    if(shouldCrash) {
        console.error('Manual fail triggered with --crash flag') 
      process.exit(1)
    }
}


runApp()