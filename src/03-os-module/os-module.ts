// to check os, cpu info, memory info, or to find home directories or check temp directory..

import * as os from 'node:os'

function runOsDemo(): void {
  console.log('PLATFORM:', os.platform())
  console.log('Architecture:', os.arch())
  console.log('OS type:', os.type());
  console.log('OS type:', os.type());
  console.log('OS Release:', os.release());
  console.log('Home directory:', os.homedir());
  console.log('Temp directory:', os.tmpdir());

  const cpus = os.cpus();
  console.log(cpus.length);

  if (cpus.length > 0) {
    console.log('first cpu model:', cpus[0]?.model, cpus[0]?.speed)
  }

  console.log(os.freemem())
}

runOsDemo()