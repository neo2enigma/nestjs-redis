import { Module } from '@nestjs/common';
import { RdsService } from './rds.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import redisConfig from '../configs/redis.config';
import * as Redis from 'redis'


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [redisConfig]
  })],
  providers: [RdsService,
    {
      provide: 'REDIS',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const redisClient = Redis.createClient({
          url: configService.get<string>('redis.url'),
        })

        await redisClient.connect()

        redisClient.once('error', () =>
          console.log('error')
        )

        redisClient.once('connect', () =>
          console.log('connected')
        )


        return redisClient
      }
    }],
  exports: ['REDIS', RdsService]
})
export class RdsModule { }
