const n = require("../../config.json");

module.exports = {
    name: 'shutdown',
    aliases: [],
    category: 'moderation',
    utilisation: '{prefix}shutdown',

    execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (message.author.id !== n.oID) {
            message.channel.send("You can't do that");
        } else {
            message.channel.send("Shutting down...").then(() => {
                client.destroy();
            })
        }
    },
};