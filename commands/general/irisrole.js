const n = require("../../config.json");

module.exports = {
    name: 'irisrole',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}irisrole',
    description: "Adds the bot's role to your server",

    async execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (message.author.id !== n.oID) {
            message.channel.send("You can't do that");
        } else {
            try {
                role = await message.guild.roles.create({
                    data: {
                        name: "IRIS",
                        color: "#11806a",
                        permissions: [8],
                        hoist: true
                    }
                });
                var list = client.guilds.cache.get(message.guild.id);
                list = list.members.cache.array();
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === "789997287409582080") {
                        message.guild.member(list[i]).roles.add(role);
                    }
                }
                message.channel.send(`${client.emotes.success} - Ruolo creato`);
            } catch (e) {
                console.log(e.stack);
            }
        }
    },
};