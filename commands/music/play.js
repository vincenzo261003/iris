const spotify = require('spotify-url-info')

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',
    description: "Plays a song/video",

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`);

        if (args[0].match(/https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:track\/|\?uri=spotify:track:)((\w|-){22})/)) {
            const spotifyData = await spotify.getPreview(args[0]).catch(() => { })
            if (spotifyData) {
                var updatedQuery = `${spotifyData.artist} - ${spotifyData.title}`
                args[0] = updatedQuery;
                client.player.play(message, spotifyData.title);
            }
        } else
            client.player.play(message, args.join(" "), { firstResult: true });
    },
};