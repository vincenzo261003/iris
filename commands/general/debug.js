module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',
    description: "Bot's state",

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
        if (message.guild.id === '568454101554167812') {
            message.channel.send(client.guilds.cache);
        }
    },
};