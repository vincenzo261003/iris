const fs = require('fs');
const discord = require('discord.js');

const config = require("./config.json");
const request = require('request');
const youtube_node = require('youtube-node');
const cheerio = require("cheerio");

const prefix = ".";

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');
const { Console } = require('console');

client.player = new Player(client);

client.config = require('./config.json');
client.emotes = require('./config/emojis.json');
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};


const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on("message", function (message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'seh':
            message.channel.send("NO");
            break;
    }
});


client.on('voiceStateUpdate', (oldState, newState) => {
    // check for bot
    if (oldState.member.user.bot) return;
    console.log("azione rilevata");
    // the rest of your code
})

client.login(client.config.token_bot);