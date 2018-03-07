import Rulo from './rulo/Rulo';

async function start(): Promise<void> {
    const velocity = parseFloat(process.argv[2]);
    await Rulo.setVelocity(velocity);
}

start();
