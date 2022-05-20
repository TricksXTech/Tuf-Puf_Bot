/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _🚀 Enter What You Want To Broadcast_
  keyboard: 
  aliases: /broad, /brd
CMD*/

var users = Bot.getProperty("Broadcasto")
if (user.telegramid == 1109004518) {
  for (var ini in users) {
    var info = users[ini]
    Api.sendMessage({
      chatid: info,
      text:
        "📛 Broadcast Message From Admin !!\n➖➖➖➖➖➖➖➖➖➖➖➖➖\n" +
        message +
        "",
      parsemode: "Markdown",
      disable_web_page_preview: true
    })
  }
  Bot.sendMessage(
    "⛔️ Broadcast Process Is On! Soon The Bot Will Send Message To All Peoples...",
    { is_reply: true }
  )
}/*else{
Bot.sendMessage("🖕");
}*/
