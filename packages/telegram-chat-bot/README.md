# telegram-chat-bot
Telegram service for interaction with Telegram-bot.

# Usage
## Installation and running
1. Create Telegram-bot by [BotFather](https://t.me/botfather).
2. Use bot api key for TELEGRAM_API_KEY env.
3. Install dependencies using `yarn install`.
4. Run service on your server or localhost.
5. Run rabbit inside docker container. You can use command: `docker run -p 5672:5672 rabbitmq:3`

## Sending commands to bot
Send some command from list:
* /switch_on - switch on yeelight device;
* /switch_off - switch off yeelight device.

You'll get message from bot if command will be completed successfully.

## Bot messages
If device action was completed successfully bot will send you a message in response to the command:
* /switch_on - 'Lamp is switched on successfully';
* /switch_off - Lamp is switched off successfully.

## Error messages
If device action was completed unsuccessfully bot will send you a message:
* 'Please use commands only starting from slash symbol' - if you send an empty massage;
* 'Unknown command. Use commands from list /switch_on, /switch_off' or 'Please use supported commands from list /switch_on, /switch_off' - if you send unknown command to bot;
* 'Device is disconnected' - if device connection wa failed.

# Logic
## TelegramSendMessageHandler
Get message from **yeelight-integration service** and send message to user notifying about successfully or unsuccessfully results of lamp control.

# Licence
The MIT License.
