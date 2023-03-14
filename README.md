# NestJs Redis


## Description

A simple redis module for NestJs using NodeJs redis version 4.x.x


## Challenge

NestJs offers redis interface via ioredis library. Although, to access more advanced redis features and redis commands you have to use other libraries.
Event using @nestjs/redis library would not help it.


## Solutions

In this repo, node-redis library have been used to implement redis connector. It cotains 2 main files which is a module and a service and 1 config file as well. 
To use that, just copy/paste rds folder and config folder in your project. Remember to modify redis.config.ts path in your rds.module.ts file. Then you have to import this module in your own module and finally import service file in your own service file and add it to your DI constructor.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



## Contribution

Since there are huge amount of powerful commands in redis, you may refactor the main service file and add other features such as json support to it.
For a complete node-redis supported commands check [here](https://github.com/redis/node-redis).
For a complete redis commands check [here](https://redis.io/commands/)


## Stay in touch

- Author - [Kamran Safaei](https://www.linkedin.com/in/kamran-safaei/)
