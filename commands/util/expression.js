const { Parser } = require('expr-eval');

module.exports = {
    name: 'expression',
    aliases: ['ex'],
    category: 'util',
    utilisation: '{prefix}expression [expression]',
    description: "Solves an expression",

    execute(client, message, args) {
        const evaluated = Parser.evaluate(args[0]).toString();
        message.channel.send('Result: ' + evaluated);
    },
};