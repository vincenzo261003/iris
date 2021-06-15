module.exports = {
    name: 'coinflip',
    aliases: ['coin'],
    category: 'misc',
    utilisation: '{prefix}coinflip',
    description: "Heads or tails",

    execute(client, message) {
        let num = Math.floor(Math.random() * 60000);
        let reply = num == 1 ? 'The coin landed on its edge! That happends only once in 6000!' : (num % 2 ? 'Heads (yes)' : 'Tails (no)');
        message.channel.send(reply);
    },
};