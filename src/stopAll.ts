import Rulo from './rulo/Rulo';

async function start(): Promise<void> {
    await Rulo.stopAll();
}

start();
