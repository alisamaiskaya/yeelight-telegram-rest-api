export interface QueueMessage<T> {
    msg: Buffer | string;
    event: T;
    correlationId: string;
    startTime: number;
}
