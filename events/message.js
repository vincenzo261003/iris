module.exports = (client, message) => {

    if (message.author.bot) return;

    const prefix = client.config.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) {
        var current = new Date();
        var logss = `${message.author.username} typed ${message.content} in ${message.channel.name} on ${message.guild.name} at ${current.getDate()}/${current.getMonth()}/${current.getFullYear()}-${current.getHours()}.${current.getMinutes()}.${current.getSeconds()}.${current.getMilliseconds()}`;
        console.log(logss);
        const channel = client.channels.cache.find(channel => channel.id === "791073784572149811")
        channel.send(logss)
        cmd.execute(client, message, args);
    }

};