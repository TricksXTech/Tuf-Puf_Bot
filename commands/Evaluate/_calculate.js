/*CMD
  command: /calculate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Evaluate
  answer: 
  keyboard: 
  aliases: 
CMD*/

function find() {
  Bot.sendMessage(
    "😑 Incorrect Format use \n`" +
      message +
      " [Amount1] [Operator] [Amount 2]`",{is_reply:true})
}

try {
  if (!params) {
  }
let receive = params.split(" ")
var amo1 = receive[0]
var op = receive[1]
var aamo2 = receive[2]
var so = ""+amo1+""+op+""+aamo2+""
if(!op&&!aamo2){
var so = amo1
}
} catch (err) {
  find()
  return
}
var doit = eval(so)
Bot.sendMessage("Answer = "+doit+"\n\nPlease [Donate Us](https://telegra.ph/Donate-To-Tuf-Puf-Bot-02-28) For Non-Stop Service",{disable_web_page_preview:true,is_reply:true})
