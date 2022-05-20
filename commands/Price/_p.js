/*CMD
  command: /p
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Price
  answer: 
  keyboard: 
  aliases: 
CMD*/

function find() {
Bot.sendMessage("⚠️ Wrong Format Use\n`" +
      message +
      " [Currency]`\nOr\n`" +
      message +
      " [Currency1] [Currency2]`",{is_reply:true});
}

try {
  if (!params) {
  }
let receive = params.split(" ")
var fromcur = receive[0]
var tocur = receive[1]
if(!tocur){
var tocur = "USD"
}
} catch (err) {
  find()
  return
}
var amo = 1;
var fromc = fromcur.toUpperCase()
var toc = tocur.toUpperCase()
var value = CurrencyQuote.convert({ amount: parseFloat(amo), from: fromc, to: toc })
  Bot.sendMessage("✅ Done Currently\n"+amo+" "+fromc+" = "+value+" "+toc+"\n\nPlease [Donate Us](https://telegra.ph/Donate-To-Tuf-Puf-Bot-02-28) For Non-Stop Service",{disable_web_page_preview:true,is_reply:true})
