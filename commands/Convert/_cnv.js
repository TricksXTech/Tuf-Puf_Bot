/*CMD
  command: /cnv
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Convert

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

function find() {
  Bot.sendMessage(
    "😑 Incorrect Format use \n`" +
      message +
      " [Amount] [From Currency] [To Currency]`",{is_reply:true})
}

function set(x, z) {
  User.setProperty(x, z)
}

try {
  if (!params) {
  }
  let receive = params.split(" ")
  set("amo", receive[0])
  set("fromcur", receive[1])
  set("tocur", receive[2])
} catch (err) {
  find()
  return
}
var amo = User.getProperty("amo")
var fro = User.getProperty("fromcur")
var fromc = fro.toUpperCase()
var tom = User.getProperty("tocur")
var toc = tom.toUpperCase()
var amo2 = 1;
var toc2 = "USD"
var fromc2 = toc.toUpperCase()
var value2 = CurrencyQuote.convert({ amount: parseFloat(amo2), from: fromc, to: toc2 })
var value3 = CurrencyQuote.convert({ amount: parseFloat(amo2), from: fromc2, to: toc2 })
var value = CurrencyQuote.convert({ amount: parseFloat(amo), from: fromc, to: toc })
  Bot.sendMessage("✅ Done Your Currency Converted\n\n❣️ "+amo+" "+fromc+" = "+value+" "+toc+"\n\n❣️ Current "+fromc+" Rate ::- $"+value2+"\n\n❣️ Current "+fromc2+" Rate ::- $"+value3,{is_reply:true})
