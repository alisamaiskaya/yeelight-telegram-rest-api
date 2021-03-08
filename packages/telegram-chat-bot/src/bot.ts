import TelegramBot from 'node-telegram-bot-api';

import { tokens } from './config/tokens';
import rabbit from './config/rabbit';
import commands from './config/telegram-commands';
import rabbitConnection from './rabbit/service';
import { chooseAction } from './utils/choose-action';
import { YeelightCommand } from '@dev/types/yeelight';

export const bot = new TelegramBot(tokens.telegramKey, { polling: true });

function sendAction(message: YeelightCommand): Promise<void> {
    return rabbitConnection.publish(rabbit.LAMP_COMMANDS_QUEUE, message);
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const command = msg.text;

    if (typeof command !== 'string') {
        bot.sendMessage(chatId, 'Please use commands only starting from slash symbol');
        return;
    }

    const action = chooseAction(command);

    if (!action) {
        bot.sendMessage(chatId, `Please use supported commands from list ${Object.keys(commands)}`);
        return;
    }

    sendAction({
        command: action,
        chatId,
    });
});