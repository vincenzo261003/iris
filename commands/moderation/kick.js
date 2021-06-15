const n = require("../../config.json");
const human = require('humanize');

module.exports = {
    name: 'kick',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}kick [user] [reason]',
    description: "Kicks a member",

    execute(client, message) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== n.oID) {
            message.channel.send("You are missing the permission(s): Kick Members.");
        } else {
            let time = new Date();
            function amPm() {
                if (time.getHours() >= 11) {
                    return "PM";
                } else return "AM";
            }
            var testCont = message.content.split(" ");
            var content = message.content.split(" ").slice(2).join(' ');
            var kicked = message.mentions.users.first();
            if (message.mentions.users.size < 1) {
                message.channel.send("You must provide a user to kick!");
            } else if (testCont.length <= 2) {
                message.channel.send("Please provide a reason for the kick.");
            } else if (message.guild.member(kicked).kickable) {
                message.guild.member(kicked).kick().then(kicked => {
                    message.channel.send({
                        embed: {
                            title: ("Kick"),
                            description: (`Kicked ${kicked.username}.`),
                            author: (message.author.username + "#" + message.author.discriminator, `${message.author.avatarURL}`),
                            fields: [
                                { name: 'Time', value: `Kick occured at ${human.date('m-d-y | h:i:s', new Date())} ${amPm()}` },
                                { name: 'Moderator', value: `Kick administered by ${message.author.username}#${message.author.discriminator}` },
                                { name: 'Reason', value: `${content}` },
                            ],
                            color: "#ff0000",
                        }
                    });
                });
            } else message.channel.send("I am unable to kick that member.");
        }
    },
};