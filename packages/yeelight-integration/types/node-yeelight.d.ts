declare module 'node-yeelight' {
    export interface YeelightDevice {
        connected: boolean, // false,
        socket: unknown,
        location: string, // 'yeelight://192.168.1.89:55443',
        host: string, // '192.168.1.89',
        port: number, // 55443,
        id: string, // '0x00000000049e4dc9',
        model: string, // 'color',
        power: string, // 'on',
        brightness: string, // '67',
        rgb: [number, number, number], // [ 175, 238, 238 ],
        hue: string, // '359',
    }

    export interface AddedYeelightDevice extends YeelightDevice {
        connected: false,
        socket: null,
    }

    export interface ConnectedYeelightDevice extends YeelightDevice {
        connected: true,
        socket: object,
    }

    // Disabled cause of defining of ts types for yeelight-module, it's not a new class
    declare class Yeelight {
      // eslint-disable-next-line no-unused-vars
      public on(eventName: 'ready', cb: () => void): void;

      // eslint-disable-next-line no-dupe-class-members, no-unused-vars
      public on(eventName: 'deviceadded', cb: (device: AddedYeelightDevice) => void): void;

      // eslint-disable-next-line no-dupe-class-members, no-unused-vars
      public on(eventName: 'deviceconnected', cb: (device: ConnectedYeelightDevice) => void): void;

      public discover(): void;

      // eslint-disable-next-line no-unused-vars
      public connect(device: AddedYeelightDevice): void;

      // eslint-disable-next-line no-dupe-class-members, no-unused-vars
      public setPower(device: ConnectedYeelightDevice, state: boolean, transition: number): void;

      public listen(): void;
    }

    export default Yeelight;
}
