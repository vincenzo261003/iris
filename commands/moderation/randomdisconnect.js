const n = require("../../config.json");

module.exports = {
    name: 'randomdisconnect',
    aliases: ['randomdc'],
    category: 'Moderation',
    utilisation: '{prefix}randomdisconnect',
    description: "Disconnects a random member from voice chat",

    execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.member.hasPermission("MOVE_MEMBERS") && message.author.id !== n.oID) {
            message.channel.send("You are missing the permission(s): Move Members.");
        } else {
            var list = message.guild.channels.cache.filter(c => c.type === 'voice');
            list = list.reduce((members, channel) => members.concat(channel.members.map(m => m.user.id)), []);
            if (list.length > 0) {
                const randomIndex = Math.floor(Math.random() * list.length);
                var disconnesso = list[randomIndex];
                console.log(list[randomIndex]);
                message.guild.member(disconnesso).voice.kick();
                message.channel.send(client.users.cache.find(user => user.id === disconnesso).username + " got disconnected");
            } else {
                message.channel.send("There are no active users at the moment :(");
            }
        }
    },
};