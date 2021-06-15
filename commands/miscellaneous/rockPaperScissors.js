module.exports = {
    name: 'rockPaperScissors',
    aliases: ['rps'],
    category: 'misc',
    utilisation: '{prefix}rps',
    description: "Have you never played rock paper scissors?",

    execute(client, message) {
        var msg1 = Array(3);
        msg1[1] = "Rock :black_circle:";
        msg1[2] = "Paper :page_facing_up:";
        msg1[3] = "Scissors :scissors:"
        var x = getRandomInt(0, 9);
        if (x < 6) {
            if (x < 3) {
                message.channel.send(msg1[1]);
            }
            else {
                message.channel.send(msg1[3]);
            }
        }
        else {
            message.channel.send(msg1[2]);
        }
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    },
};