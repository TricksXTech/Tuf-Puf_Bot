/*CMD
  command: DoCB
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var apikey="xxx" // Enter CB Api Key Here
var privatekey="xxx" // Enter CB Private Key Here
var currency="DOGE" // Enter Currency Here Here
var amoun="0.001"  // Enter Amo Here
var amount=amoun*1
var address="techfire166@gmail.com" // Enter Address Here
HTTP.get({
url:"https://api.txt-dev.tk/cb/info?key="+apikey+"&pkey="+privatekey+"&curr="+currency+"&amount="+amount+"&address="+address+"",
success:'/done'
})

