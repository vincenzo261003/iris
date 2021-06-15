module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(c => c.category == 'Infos').map((c) => '`' + c.name + '`').join(', ');
            const mod = message.client.commands.filter(c => c.category == 'Moderation').map((c) => '`' + c.name + '`').join(', ');
            const reactions = message.client.commands.filter(c => c.category == 'gifs').map((c) => '`' + c.name + '`').join(', ');
            const misc = message.client.commands.filter(c => c.category == 'misc').map((c) => '`' + c.name + '`').join(', ');
            const ws = message.client.commands.filter(c => c.category == 'ws').map((c) => '`' + c.name + '`').join(', ');
            const util = message.client.commands.filter(c => c.category == 'util').map((c) => '`' + c.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'General', value: infos },
                        { name: 'Moderation', value: mod },
                        { name: 'Reactions', value: reactions },
                        { name: 'Web search', value: ws },
                        { name: 'Utilities', value: util },
                        { name: 'Miscellaneous', value: misc },
                        { name: 'Music', value: music },
                    ],
                    timestamp: new Date(),
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(c => c.aliases && c.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join('\n'), inline: true },
                        { name: 'Description', value: command.description, inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};