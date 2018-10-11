const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: 
Join this server to get some real next class fun!
Also free moderator to the first 10 people :D

https://discord.gg/cUgYbEr
https://discord.gg/Jh2Au5
=============================================
:kissing::heart::eyes: 
ادخل السيرفر يقلبي تحصل كثير ناس حبوبين
فضلا وليس امرا....
الدعوة خاصة لك ياقلبي
اكواد خاصة لبوتات ديسكورد - ادمن رئيسي لاول 10 اشخاص لحق يالحبيب
https://discord.gg/cUgYbEr 
https://discord.gg/Jh2Au5
[ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: 
Join this server to get some real next class fun!
Also free moderator to the first 10 people :D

https://discord.gg/cUgYbEr
https://discord.gg/Jh2Au5
=============================================
:kissing::heart::eyes: 
ادخل السيرفر يقلبي تحصل كثير ناس حبوبين
فضلا وليس امرا....
الدعوة خاصة لك ياقلبي
اكواد خاصة لبوتات ديسكورد - ادمن رئيسي لاول 10 اشخاص لحق يالحبيب
https://discord.gg/cUgYbEr
https://discord.gg/Jh2Au5
[ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NDk5MzAwMDIxMDM2OTA4NTU0.DqEgvg.fCzyfRlGIjK2XnCLKUSa77-GIRk');
