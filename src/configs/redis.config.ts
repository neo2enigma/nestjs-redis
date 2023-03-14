import { registerAs } from '@nestjs/config'

export default registerAs('redis', () => ({
    url: (process.env.REDIS_USERNMAE && process.env.REDIS_PASSWORD) ? `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}` : `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
}))