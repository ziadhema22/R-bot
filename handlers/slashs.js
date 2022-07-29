const fs = require('fs');

module.exports = (client) => {
    client.slashCommands = async (slashsFolders, path) => {
        client.commandArray = [];
        try {
            client.on('ready', async () => {
                await client.application.commands.set([]);
                for (folder of slashsFolders) {
                    const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
                    for (const file of commandFiles) {
                        const commandData = require(`../commands/${folder}/${file}`);
                        client.slashs.set(commandData.data.name, commandData);
                        client.commandArray.push(commandData.data.toJSON());
                        const guild = await client.guilds.fetch('997981851421524068');
                        if (commandData.setPermissions) {
                            slashCommand = await guild.commands.create(commandData.data);
                            commandData.setPermissions(slashCommand);
                        } else {
                            await guild.commands.create(commandData.data);
                        }
                    }
                }
            });
            console.log('\nStarted refreshing application (/) commands.\nSuccessfully reloaded application (/) commands.\n');
        } catch (error) {
            console.log(error);
        }
    }
}