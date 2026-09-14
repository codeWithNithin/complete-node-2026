//  for delays, to run some code repeatedly,for ex: for 2 mins

// setTimeout(), setInterval(), clearTimeout(), clearInterval(), setImmediate()

// 1. settimeout()

import {setTimeout as sleep} from 'node:timers/promises'

function runSetTimeout(): void {
    console.log('settimeout example started')

    setTimeout(() => {
        console.log('this runs after 1 second')
    }, 1000)

    console.log('this run immidiaely. nodejs doesnt wait')
}


function runClearTimeout(): void {
    console.log('settimeout example started')

const timerId = setTimeout(() => {
        console.log('this doesnt run only')
    }, 2000)


    clearTimeout(timerId)

    console.log('clear time out cancelled the 2 seconds timer')
}

function runSetInterval(): void {

    let count = 0

  const timerId =  setInterval(() => {
     count++

     console.log(`set interval tick: ${count}`)

     if(count === 3) {
        clearInterval(timerId)
        console.log('this interval cleared')
     }

    }, 2000)
}


function runSetImmediate(): void {

    setImmediate(() => {
        console.log('set immidiate callback')
    })
}

async function runPromiseBasedTimer(): Promise<void> {
    console.log('promise based timer starts')
 await sleep(1500)
 console.log('promise based timer ends after 1500 seconds')
}


function runTimerDemo() {
    runSetTimeout();
    runClearTimeout();
    runSetInterval();
    runSetImmediate()
    runPromiseBasedTimer()
}


runTimerDemo()
