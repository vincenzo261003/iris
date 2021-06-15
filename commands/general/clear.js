module.exports = {
    name: 'clear',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}clear [number]',
    description: "Clear a certain amount of messages (including the command)",

    execute(client, message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send("You are missing the permission(s): Manage messages.");
        if (isNaN(args[0])) {
            return message.channel.send('Enter the amount of messages that you would like to clear');
        }
        if (Number(args[0]) < 0) {
            return message.channel.send('Enter a positive number');
        }
        message.channel.bulkDelete(args[0], true)
            .then((_message) => {
                message.channel
                    .send(`Bot cleared \`${_message.size}\` messages`)
                    .then((sent) => {
                        setTimeout(() => {
                            sent.delete();
                        }, 2500);
                    });
            });
    },
};