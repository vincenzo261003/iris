module.exports = {
    name: 'invite',
    aliases: ['inv'],
    category: 'Infos',
    utilisation: '{prefix}invite',
    description: "Shows the bot's invite links",

    execute(client, message) {
        let perms = 1409674343; //permission bitfield
        message.channel.send({
            embed: {
                color: 0xf97304,
                timestamp: message.createdAt,
                footer: {
                    text: message.author.tag,
                    icon_url: message.author.avatarURL({ format: 'png', dynamic: true, size: 4096 })
                },
                description: `[Invite IRIS to your server](https://discord.com/api/oauth2/authorize?client_id=789997287409582080&permissions=8&scope=bot)\n`
                    + `[Support Server Invite](https://discord.gg/79qTaMu)`
            }
        });
    },
};