const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = {
    name: 'ipinfo',
    aliases: [],
    category: 'util',
    utilisation: '{prefix}ip',
    description: "Shows an IP location",

    execute(client, message, args) {
        snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
            message.channel.send({
                embed: {
                    description: `**__GeoIP Lookup Information__**`,
                    fields: [
                        { name: '**Looked Up IP**', value: `${args}` },
                        { name: '**ASN**', value: `${r.body.as}` },
                        { name: '**City**', value: `${r.body.city}` },
                    ],
                    footer: (`Resolved By: ${message.author.tag}`),
                }
            });
        });
    }
};