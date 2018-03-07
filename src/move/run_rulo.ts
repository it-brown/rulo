import * as child_process from 'child_process';

namespace Sample {
    export class rulo {
        protected checkRunMode(): void {
            child_process.exec('rostopic pub -1 mobile_base/event/mode', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                  }
                console.log(`stdout: ${stdout}`);
                console.log(`sterr: ${stderr}`);
            })
        }
    }

    child_process.exec('ls -l', (error, stdout, stderr)=> {
        if ( error instanceof Error) {
            console.error(`error: ${error}`);
            console.log('exec Error *******');
        } else {
            console.log(`stdout: ${stdout}`);
            console.log('exec Success!');
        }
    })
}
