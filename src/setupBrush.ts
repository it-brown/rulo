import Rulo from './rulo/Rulo';

async function start(): Promise<void> {
    function I(arg: string): number {
        return parseInt(arg);
    }
    await Rulo.setupBrush(I(process.argv[2]), I(process.argv[3]), I(process.argv[4]), I(process.argv[5]), I(process.argv[6]));
}

start();
