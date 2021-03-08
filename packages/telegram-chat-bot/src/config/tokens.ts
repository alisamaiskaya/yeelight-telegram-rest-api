const telegramKey = process.env.TELEGRAM_API_KEY;

if (!telegramKey) {
    throw new Error('TELEGRAM_API_KEY must be provided');
}

export const tokens = {
    telegramKey,
};