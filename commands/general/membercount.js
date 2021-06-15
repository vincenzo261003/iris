const n = require("../../config.json");

module.exports = {
    name: 'membercount',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}membercount',
    description: "Counts the amount of members in the server",

    execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        var list = client.guilds.cache.get(message.guild.id);
        list = list.members.cache.array();
        message.channel.send("Membri del server: " + list.length);
    },
};