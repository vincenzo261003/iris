module.exports = {
    name: 'chapo',
    aliases: ['chapo', 'chapodelcartello'],
    category: 'roba',
    utilisation: '{prefix}chapodelcartello',

    execute(client, message) {
        var chapoint = Math.floor(Math.random() * (50 - 1)) + 1;
        var chapoint2 = Math.floor(Math.random() * (1000 - 1)) + 1;
        if (chapoint === 33) {
            message.channel.send({
                files: [{
                    attachment: './commands/robaSimpatica/chapo2.jpeg',
                    name: 'chapo2.jpeg'
                }]
            });
            message.channel.send("Complimenti " + message.author.username + " hai trovato il chapo magico che appare una volta su 100");
        }
        if (chapoint2 === 500) {
            message.channel.send({
                files: [{
                    attachment: './commands/robaSimpatica/urlodelsium.png',
                    name: 'urlodelsium.png'
                }]
            });
            message.channel.send("Complimenti " + message.author.username + " hai trovato il trio dei boysse che appare una volta su 1000");
        } else {
            message.channel.send({
                files: [{
                    attachment: './commands/robaSimpatica/chapo.jpg',
                    name: 'chapo.jpg'
                }]
            });
        }
    },
};