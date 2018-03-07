import * as child_process from 'child_process';

export interface StdOut {
    out: string;
    error: string;
}

export async function exec(cmd: string): Promise<StdOut> {
    return await new Promise<StdOut>((resolve, reject) => {
        child_process.exec(cmd, (e: Error, out: string, error: string) => {
            if (e) {
                reject(e);
                return;
            }

            resolve({out, error});
        });
    });
}
