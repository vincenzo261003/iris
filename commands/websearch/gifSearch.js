const config = require("../../config.json");
const request = require('request');
const cheerio = require("cheerio");

module.exports = {
    name: 'gif',
    aliases: [],
    category: 'ws',
    utilisation: '{prefix}gif [name]',
    description: "Search for a GIF on the internet",

    execute(client, message) {
        let splitWord = message.toString().split(" ");
        let gifWord = "";

        // Loop through incase of multiple word search
        for (var i = 1; i < splitWord.length; i++) {
            if (i > 1) {
                gifWord = gifWord + "+";
            }

            gifWord = gifWord + splitWord[i];
        }

        request("http://api.giphy.com/v1/gifs/search?q=" + gifWord + "&api_key=" + config.giphyKey + "&limit=100", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Convert body to JSON object
                let jsonUrl = JSON.parse(body);

                // Get random number to choose GIF
                let totGif = jsonUrl.data.length;

                if (totGif > 100) {
                    totGif = 100;
                }

                let ranNum = Math.floor(Math.random() * totGif);

                message.channel.send(jsonUrl.data[ranNum].url);
            }
        });
    },
};