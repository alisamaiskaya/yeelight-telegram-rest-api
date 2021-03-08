const rabbit = {
    HOST: process.env.RABBIT_HOST || 'localhost',
    PORT: process.env.RABBIT_PORT || 5672,
    LAMP_COMMANDS_QUEUE: 'yeelight.commands',
    TELEGRAM_SEND_MESSAGE_QUEUE: 'telegram.send_messages',
}

export default rabbit;