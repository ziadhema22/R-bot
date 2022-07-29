const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('always-online')
        .setDescription('AlwaysOnline projct'),

    async execute(interaction, client) {

        let Embed = new EmbedBuilder()
            .setColor('#242222')
            .setTitle('Youtube Tutorial')
            .setURL('https://www.youtube.com/channel/UC7DmgeI3rFo8MIOILHmaQ5g')
            .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.username
            })
            .addFields(
                {name: '<:catalogue:855154920259715154>Important Notes:', value: '```طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس```'},
                {name: '<:design:1002001716897660948> Remix/Fork To Edit Projects:', value: '> <:glitch:1002001593551564810> not here \n>  <:replit:1002001459916849162> [Replit Project](https://replit.com/@complexe1337/AlwaysonlineHabiba#server.js)'},
                )
            .setTimestamp()
        await interaction.reply({ embeds: [Embed] });

    }

}