import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RdsService {

    constructor(@Inject('REDIS') private readonly redis: RedisClientType) { }


    async set(key: string, value: string, ttl?: number): Promise<void> {
        try {
            await this.redis.set(key, value, { PX: ttl })
        } catch (error) {
            throw new Error(error)
        }
    }


    async get(key: string): Promise<any> {
        try {
            return await this.redis.get(key)
        } catch (error) {
            throw new Error(error)
        }
    }


    async del(key: string): Promise<void> {
        try {
            await this.redis.del(key)
        } catch (error) {
            throw new Error(error)
        }
    }
}
