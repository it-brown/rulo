import Rulo from './rulo/Rulo';
import {I} from './setupBrush';

async function start(): Promise<void> {
    await Rulo.spinBrushMotor(I(process.argv[2]), I(process.argv[3]), I(process.argv[4]));
}

start();
