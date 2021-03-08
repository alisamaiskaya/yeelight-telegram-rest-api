import { QueueMessage } from '@dev/types/rabbit';
import {
  TelegramMessageActions,
  TelegramSendMessage,
} from '@dev/types/telegram';
import {
  YeelightCommand,
  YeelightCommands,
} from '@dev/types/yeelight';
import { BaseQueueHandler } from 'rabbit-queue';
import YeelightOneLamp from '../yeelight/yeelight-one-lamp';
import rabbitConnection from '../rabbit/service';
import rabbit from '../config/rabbit';

function sendAction(message: TelegramSendMessage): Promise<void> {
  return rabbitConnection.publish(rabbit.TELEGRAM_SEND_MESSAGE_QUEUE, message);
}

const lamp = new YeelightOneLamp();
lamp.listen();

export default class YeelightCommandsHandler extends BaseQueueHandler {
  handle({ event }: QueueMessage<YeelightCommand>) {
    if (lamp.isConnected) {
      switch (event.command) {
        case YeelightCommands.SWITCH_ON:
          lamp.switchOn();
          sendAction({
            action: TelegramMessageActions.SWITCH_ON,
            chatId: event.chatId,
          });
          break;
        case YeelightCommands.SWITCH_OFF:
          lamp.switchOff();
          sendAction({
            action: TelegramMessageActions.SWITCH_OFF,
            chatId: event.chatId,
          });
          break;
          // TODO: do it later
          // case 'bright':
          //   break;
        default:
          sendAction({
            action: TelegramMessageActions.ERROR,
            chatId: event.chatId,
          });
      }
    } else {
      sendAction({
        action: TelegramMessageActions.DISCONNECTED,
        chatId: event.chatId,
      });
    }
  }
}
