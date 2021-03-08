import Yeelight, { ConnectedYeelightDevice } from 'node-yeelight';

export default class YeelightOneLamp {
    private device: ConnectedYeelightDevice | undefined;

    private yeelightConnection: Yeelight;

    private internalIsConnected: boolean = false;

    constructor() {
      this.yeelightConnection = new Yeelight();
    }

    get isConnected(): boolean {
      return this.internalIsConnected;
    }

    public switchOn(): void {
      if (!this.device || !this.isConnected) {
        return;
      }

      this.yeelightConnection.setPower(this.device, true, 300);
    }

    public switchOff(): void {
      if (!this.device || !this.isConnected) {
        return;
      }

      this.yeelightConnection.setPower(this.device, false, 300);
    }

    public listen(): void {
      this.yeelightConnection.on('ready', () => {
        // eslint-disable-next-line no-console
        console.log('Yeelight is ready');
        this.yeelightConnection.discover();
      });

      this.yeelightConnection.on('deviceadded', (d) => {
        // eslint-disable-next-line no-console
        console.log('Yeelight device is added');
        this.yeelightConnection.connect(d);
      });

      this.yeelightConnection.on('deviceconnected', (d) => {
        // eslint-disable-next-line no-console
        console.log('Device is connected');
        this.device = d;

        this.internalIsConnected = true;
      });

      this.yeelightConnection.listen();
    }
}
