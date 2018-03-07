import { exec, StdOut } from '../ext/async_process';

namespace Sample {
    export class rulo {
        protected async checkRunMode(): Promise<void> {
            const out: StdOut = await exec('rostopic pub -1 mobile_base/event/mode');
            console.log(`stdout: ${out.out}`);
            console.log(`sterr: ${out.error}`);
        }
    }
}
