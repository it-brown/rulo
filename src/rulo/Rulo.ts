import { exec, StdOut } from '../ext/async_process';

export default class Rulo {
    public static async checkRunMode(): Promise<void> {
        const out: StdOut = await exec('rostopic pub -1 mobile_base/event/mode');
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }
}
