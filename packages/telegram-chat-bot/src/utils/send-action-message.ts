import TelegramBot from 'node-telegram-bot-api';
import { TelegramMessageActions } from '@dev/types/telegram';
import commands from '../config/telegram-commands';

export function sendActionMessage(bot: TelegramBot, action: TelegramMessageActions, chatId: number): void {
    switch (action) {
        case TelegramMessageActions.SWITCH_ON:
            bot.sendMessage(chatId, 'Lamp is switched on successfully');
            break;
        case TelegramMessageActions.SWITCH_OFF:
            bot.sendMessage(chatId, 'Lamp is switched off successfully');
            break;
        case TelegramMessageActions.DISCONNECTED:
            bot.sendMessage(chatId, 'Device is disconnected');
            break;
        default:
            bot.sendMessage(chatId, `Unknown command. Use commands from list ${Object.keys(commands)}`);
            break;
    }
}