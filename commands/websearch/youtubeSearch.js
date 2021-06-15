const config = require("../../config.json");
const youtube_node = require('youtube-node');

module.exports = {
    name: 'youtube',
    aliases: ['yt'],
    category: 'ws',
    utilisation: '{prefix}yt [name]',
    description: "Search for a youtube video",

    execute(client, message) {
        let splitWord = message.toString().split(" ");
        let searchWrd = "";
        this.youtube = new youtube_node();
        this.youtube.setKey(config.googleKey);
        this.youtube.addParam('type', 'video');

        // Loop through incase of multiple word search
        for (var i = 1; i < splitWord.length; i++) {
            if (i > 1) {
                searchWrd = searchWrd + " ";
            }

            searchWrd = searchWrd + splitWord[i];
        }

        this.youtube.search(searchWrd, 1, function (error, result) {
            if (error) {
                console.log(error);
                message.channel.send("¯\\_(ツ)_/¯");
            }
            else {
                if (!result || !result.items || result.items.length < 1) {
                    message.channel.send("¯\\_(ツ)_/¯");
                } else {
                    // Get random number
                    let ranNum = Math.floor(Math.random() * result.items.length);
                    let randResult = result.items[ranNum].id.videoId;
                    message.channel.send("http://www.youtube.com/watch?v=" + randResult);
                }
            }
        });
    },
};