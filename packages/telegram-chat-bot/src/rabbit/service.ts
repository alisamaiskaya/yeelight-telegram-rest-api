import { Rabbit } from 'rabbit-queue';
import rabbit from '../config/rabbit';
import TelegramSendMessageHandler from '../handlers/telegram-send-massage-handler';

const rabbitConnection = new Rabbit(`amqp://${rabbit.HOST}:${rabbit.PORT}`);

// Disable rule due architecture of rabit-queue module
// eslint-disable-next-line no-new
new TelegramSendMessageHandler(rabbit.TELEGRAM_SEND_MESSAGE_QUEUE, rabbitConnection, {
  retries: 3,
  retryDelay: 1000,
  logEnabled: true,
  scope: 'SINGLETON',
  createAndSubscribeToQueue: true,
});

export default rabbitConnection;
