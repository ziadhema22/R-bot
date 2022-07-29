const db = require("quick.db")
module.exports = async (client, message) => {

    console.log(`Logged us: ${client.user.tag}`);
    client.user.setActivity("𝐏𝐑 Official", {type: "STREAMING", url: "https://www.twitch.tv/  "});
 setInterval(() => {
    client.guilds.cache.forEach(g => {
      client.channels.cache.forEach(c => {
         let channel = g.channels.cache.get(db.get(`join_${g.id}_${client.user.id}`));
         if(channel) {
             channel.join()
         }
      })
    })
  }, 5000)

};