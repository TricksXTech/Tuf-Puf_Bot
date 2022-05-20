/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: /start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("⚠️ This Action Is Not Supported Here\nMessage Me [Privately](https://t.me/tuf_puf_Bot?start)",{disable_web_page_preview:true,is_reply:true})
return }
var but = [[{title:"⚓ Get This Bot",url:"https://t.me/TricksXTechOwner"}],[{title:"⭐ Support Chat",url:"https://t.me/chatbotsbusiness"}]]
Bot.sendInlineKeyboard(but,"_🚀 This Bot Is Designed By @TricksXTechOwner_\n\nYou Can Check Price Of Crypto And Many More Click /help To Know More About Bot",{is_reply:true})
var broadcastt = Bot.getProperty("Broadcasto")
var broadcasth = broadcastt ? broadcastt : []
if(!broadcasth.includes(user.telegramid)){ 
broadcasth.push(user.telegramid)
Bot.setProperty("Broadcasto",broadcasth,"json")
}
/*You can check it is adding users to list or not by this way: Bot.sendMessage("Done : "+inspect(Bot.getProperty("Broadcasot"))+"")*/ /*?Bot.getProperty("Broadcast") ;*/
