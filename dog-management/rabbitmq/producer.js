const ampq = require("amqplib");
const config = require("./config");

class Producer {
    channel;

    async createChannel() {
        const connection = await ampq.connect(config.rabbitMQ.url)
        this.channel = await connection.createChannel();
    }

    async publishMessage(routingKey, message) {
        if (!this.channel) {
            await this.createChannel();
        }

        const exchangeName = config.rabbitMQ.exchangeName;
        await this.channel.assertExchange(exchangeName, "direct");

        const str = JSON.stringify(message);
        await this.channel.publish(exchangeName, routingKey, Buffer.from(str));

        console.log(`The message: ${str} is sent to exchange ${exchangeName}`)
    }
}

module.exports = Producer;