module.exports = {
    name: '8ball',
    aliases: [],
    category: 'misc',
    utilisation: '{prefix}8ball',
    description: "Always has the right answer",

    execute(client, message) {
        const responses = [
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes – definitely",
            "You may rely on it",
            "As I see it",
            "yes",
            "Most Likely",
            "Outlook good",
            "Yes",
            "Signs point to yes"
        ];

        const randomIndex = Math.floor(Math.random() * responses.length);
        message.channel.send(responses[randomIndex]);
    },
};