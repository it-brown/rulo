import { exec, StdOut } from '../ext/async_process';

export default class Rulo {
    // subscribe topic

    public static async changeRunMode(mode: string): Promise<void> {
        if(mode.match(/^(manual|normal)$/)) {
            const out: StdOut = await exec(`rostopic pub -1 mobile_base/command/mode std_msgs/String -- ${mode}`);
            console.log(`stdout: ${out.out}`);
            console.log(`sterr: ${out.error}`);
        } else {
            console.log('invalid argument value. give "normal" or "manual".');
            return;
        }
    }

    public static async setVelocity(velocity: number): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 Rulo/cmd_vel geometry_msgs/Twist -- '[${velocity}, 0.0, 0.0]' '[0.0, 0.0, 0.0]'`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    // TODO: has to be checked
    public static async drivePwm(percentage: number): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 drivePwm rulo_msgs/DrivePwm --`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    // TODO: has to be checked
    public static async setupBrush(side_brush: number, vacuum: number, main_brush: number, side_brush_clockwise: number, main_sbrush_dir: number): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/command/brushes_cmd rulo_msgs/Brushes_cmd -- ${side_brush} ${vacuum} ${main_brush} ${side_brush_clockwise} ${main_sbrush_dir}`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async spinBrushMotor(side_brush: number, vacuum: number, main_brush: number): Promise<void> {
        if(side_brush || vacuum || main_brush < 0 || 100 < side_brush || vacuum || main_brush) {
            console.log('invalid argument value. set the value between 0 ~ 100');
            return;
        }
        const out: StdOut = await exec(`rostopic pub -1 /mobile_base/command/brushesPWM_cmd rulo_msgs/BrushesPWM_cmd -- ${side_brush} ${vacuum} ${main_brush}`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    // publish topic
    // TODO: below has to be all checked
    public static async bumperStatus(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/bumper rulo_msgs/Bumper`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async dropWheel(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/wheelDrop rulo_msgs/BooleanSensor`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async currentMode(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/mode std_msgs/Int8`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async dropSensor(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/cliff rulo_msgs/IRBumper`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async batteryStatus(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/battery rulo_msgs/Battery`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async motorStatus(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/drive rulo_msgs/Drive`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async checkSlip(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/slip rulo_msgs/Slip`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async leftIR(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/opt_left rulo_msgs/Range`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async rightIR(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/opt_right rulo_msgs/Range`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async brushStatus(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/braches rulo_msgs/Brushes`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async detectGarbage(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/dirt_detect rulo_msgs/DirtDetect`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async dustboxStatus(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/dustbox rulo_msgs/BooleanSensor`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }

    public static async dustLevel(): Promise<void> {
        const out: StdOut = await exec(`rostopic pub -1 mobile_base/event/dust std_msgs/Byte`);
        console.log(`stdout: ${out.out}`);
        console.log(`sterr: ${out.error}`);
    }
}
