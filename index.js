const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/DK8DkXP ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('NDk2NjU3MTkzMjYxODU4ODE3.Dp45WQ.f0zkDueXfI44NiseRXT8cyU-uNI');
