import { TelegramMessageActions } from './message-actions.enum';

export interface TelegramSendMessage {
    action: TelegramMessageActions;
    chatId: number;
}