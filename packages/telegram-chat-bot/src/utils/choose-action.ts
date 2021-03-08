import commands from '../config/telegram-commands';
import { YeelightCommands } from '@dev/types/yeelight';

export function chooseAction(telegramCommand: string): YeelightCommands | null {
    return commands[telegramCommand] || null;
}