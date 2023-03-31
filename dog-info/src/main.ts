import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const amqp = require('amqplib');

async function consumeMessages() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertExchange('dogExchange', 'direct');

  const q = await channel.assertQueue('InfoQueue');

  await channel.bindQueue(q.queue, 'dogExchange', 'Info');

  channel.consume(q.queue, (msg) => {
    const data = JSON.parse(msg.content);
    console.log(data);
    channel.ack(msg);
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
consumeMessages();
