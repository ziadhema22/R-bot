module.exports = {
    name: 'voiceStateUpdate',
    async execute(oldState, newState, client) {

        if (oldState.channelId === newState.channelId) return;
        if (newState.channelId === '1001610026626064484') {

            const member = newState.guild.members.cache.get(newState.id);
            const checkChannel = newState.guild.channels.cache.find(channel => channel.name === member.user.tag);

            if (!checkChannel) {
                newState.guild.channels.create(member.user.tag, {
                    type: 2,
                    parent: '1001609827614736466',
                    permissionOverwrites: [
                        {
                            type: 'role',
                            id: newState.guild.roles.everyone,
                            deny: ['ViewChannel']
                        },
                        {
                            type: 'user',
                            id: newState.id,
                            allow: ['ViewChannel', 'Speak']
                        },
                    ],
                }).then(createdChannel => member.voice.setChannel(createdChannel).catch(error => { }));
            } else {
                await member.voice.setChannel(checkChannel).catch(error => { });
            }

        }

    }
};