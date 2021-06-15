const n = require("../../config.json");

module.exports = {
    name: 'banbot',
    aliases: [],
    category: 'moderation',
    utilisation: '{prefix}banbot',

    execute(client, message) {
        if (message.author.id !== n.oID) {
            message.channel.send("You can't do that");
        } else {
            var list = client.guilds.cache.get(message.guild.id);
            list = list.members.cache.array();
            for (var i = 0; i < list.length; i++) {
                if (list[i].user.username === "Tesla.") {
                    message.guild.member(list[i]).ban();
                }
            }
        }
    },
};