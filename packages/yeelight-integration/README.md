# yeelight-integration
Yeelight service for controlling yeelight devices.

# Usage
## Installation and running
1. Buy some lamp device of Xiaomi Yeelight =)
2. Install dependencies using `yarn install`.
3. Run service on your server or localhost.
4. Run rabbit inside docker container if you didn't run it earlier. You can use command: `docker run -p 5672:5672 rabbitmq:3`

**WARNING!** For successfully work your server and yeelight device must be in common network.

# Logic
## YeelightOneLamp class
* listen() - method for discovering, connecting and adding yeelight device;
* isConnected - getter denoting that device was connected and ready for some manipulations with it;
* switchOn() - method for switching on yeelight device;
* switchOff() - method for switching off yeelight device.

## YeelightCommandsHandler
Get message from **telegram-chat-bot service**, make actions with yeelight device and send result message to **telegram-chat-bot service** by rabbit.

Available command for yeelight device actions:
* on - switch on yeelight device;
* off - switch off yeelight device.

## node-yeelight.d.ts
Defining of ts types for **node-yeelight module**.

# Licence
The MIT License.
