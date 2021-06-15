module.exports = {
    name: 'kms',
    aliases: [],
    category: 'gifs',
    utilisation: '{prefix}kms',
    description: "Please don't",

    execute(client, message) {
        message.channel.send({
            embed: {
                color: "#700d75",
                description: "u okay bro?",
            }
        });
    },
};