const n = require("../../config.json");

module.exports = {
    name: 'banall',
    aliases: [],
    category: 'moderation',
    utilisation: '{prefix}banall',

    execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (message.author.id !== n.oID) {
            message.channel.send("You can't do that");
        } else {
            var list = client.guilds.cache.get(message.guild.id);
            list = list.members.cache.array();
            for (var i = 0; i < list.length; i++) {
                message.guild.member(list[i].ban());
            }
        }
    },
};