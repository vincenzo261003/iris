module.exports = {
    name: 'random',
    aliases: [],
    category: 'misc',
    utilisation: '{prefix}random [n1] [n2]',
    description: "Replies with a random number between n1 and n2",

    execute(client, message, args) {
        message.channel.send("The number is " + getRandomInt(args[0], args[1]));
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    },
};