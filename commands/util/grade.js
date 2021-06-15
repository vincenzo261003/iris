module.exports = {
    name: 'gradecalculator',
    aliases: ['gc'],
    category: 'util',
    utilisation: '{prefix}gc [points] [total points]',
    description: "A useful grade calculator",

    execute(client, message, args) {
        const score = Math.round((args[0] / args[1]) * 100);
        message.channel.send('Score: ' + score);
    },
};