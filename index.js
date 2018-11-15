const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`! Legends | By: RO7`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
 
client.on("guildMemberAdd", member => {
  var server = "509080649014181890"; // ايدي السررفر
var channel = "509080649488007180";//ايدي الروم
    
    client.guilds.get(server).channels.get(channel).send('**Welcmome**')
   
});

client.login(process.env.BOT_TOKEN);
