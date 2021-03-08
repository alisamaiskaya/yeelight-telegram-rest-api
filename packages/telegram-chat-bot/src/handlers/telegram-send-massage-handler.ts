import { QueueMessage } from '@dev/types/rabbit';
import {
    TelegramSendMessage,
} from '@dev/types/telegram';
import { BaseQueueHandler } from 'rabbit-queue';
import { bot } from '../bot';
import { sendActionMessage } from '../utils/send-action-message';

export default class TelegramSendMessageHandler extends BaseQueueHandler {
    handle({ event }: QueueMessage<TelegramSendMessage>) {
        sendActionMessage(bot, event.action, event.chatId);
    }
}
