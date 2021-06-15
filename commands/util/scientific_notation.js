module.exports = {
    name: 'scientific_notation',
    aliases: ['sn'],
    category: 'util',
    utilisation: '{prefix}sn [number]',
    description: "Shows the scientific notation of a number",

    execute(client, message, args) {
        const number = parseFloat(args[0]);
        message.channel.send(number.toExponential());
    },
};