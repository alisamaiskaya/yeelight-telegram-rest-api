import { YeelightCommands } from './commands.enum';

export interface YeelightCommand {
    command: YeelightCommands;
    chatId: number;
}
