const Discord = require("discord.js");

module.exports = {
    name: 'megaphone',
    aliases: ['m'],
    category: 'util',
    utilisation: '{prefix}megaphone',
    description: "Better than priority speaker",

    execute(client, message, args) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.member.hasPermission("PRIORITY_SPEAKER") && message.author.id !== n.oID && !message.member.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send("You are missing the permission(s): Priority speaker, manage channels.");
        } else {
            const speaker = message.mentions.users.first();
        }
    }
};