/*CMD
  command: /p3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var users = Bot.getProperty("Broadcasto")
Bot.sendMessage("Done : "+inspect(Bot.getProperty("Broadcasto"))+"")
for (var ini in users) {
    var info = users[ini]
Api.sendMessage({
      chatid: info,
      text:"hi"})
}
