import Rulo from './rulo/Rulo';

async function start(): Promise<void> {
    await Rulo.spinBrushMotor(30, 20, 30);
}

start();
