const { Client, Collection } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');
const fs = require('fs');

const client = new Client({
    intents: [
        'Guilds'
    ]
});

client.slashs = new Collection();
const handlers = fs.readdirSync('./handlers').filter(file => file.endsWith('.js'));
const slashsFolders = fs.readdirSync('./commands');
for (file of handlers) {
    require(`./handlers/${file}`)(client);
}
client.slashCommands(slashsFolders, './commands');

client.login(TOKEN);