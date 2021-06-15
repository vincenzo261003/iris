const n = require("../../config.json");

module.exports = {
    name: 'randomban',
    aliases: [],
    category: 'moderation',
    utilisation: '{prefix}randomban',

    execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== n.oID) {
            message.channel.send("You are missing the permission(s): Ban Members.");
        } else {
            if (message.guild.id !== '709917349586796574') {
                message.channel.send("Command not enabled on this server");
            } else {
                const list = message.guild.members.cache.map(m => m.user.id);
                const randomIndex = Math.floor(Math.random() * list.length);
                var bannato = list[randomIndex];
                message.guild.member(bannato).ban();
                message.channel.send(bannato.username + " got banned, RIP");
            }
        }
    },
};