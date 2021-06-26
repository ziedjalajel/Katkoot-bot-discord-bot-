const Discord = require("discord.js");
const fetch = require("node-fetch");
const keepAlive = require("./server");
const client = new Discord.Client();

const inspirational = ["inspire", "quotes", "motivation", "motivational"];
const sadWords = [
  "sad",
  "depressed",
  "unhappy",
  "angry",
  "sarcastic",
  "cry",
  "crying",
  "suicide",
  "die",
];
const sarcasim = [
  "burn in hell",
  "wooow amaaaaaazing maaaaagic",
  "good for you",
  "shame on you",
  "you need a crush",
  "do a back flip before you die",
  "donald trump is better than you",
  "بتتخوت يا ملوث",
  "google it !",
  "i'm sorry i don't take orders, i barley take suggestions",
  "i don't wanna marry you",
  "an emo has less cuts on his wrist than you",
];
let getQuote = () => {
  return fetch("https://zenquotes.io/api/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data[0]["q"] + "-" + data[0]["a"];
    });
};
client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`);
});
client.on("message", (msg) => {
  if (msg.author.bot) return;
  if (inspirational.some((word) => msg.content.includes(word))) {
    getQuote().then((quote) => msg.channel.send(quote));
  }
  if (msg.author.bot) return;
  if (sadWords.some((word) => msg.content.includes(word))) {
    const sarcasims = sarcasim[Math.floor(Math.random() * sarcasim.length)];
    msg.reply(sarcasims);
  }
});
keepAlive();
client.login("ODU3NTQxMTczMDk0Nzc2ODQy.YNRFdA.Eyrs_HkKRmqOY8ETR52nMbDVmwo");

//replaced with an array
//   if (
//     msg.content === "inspire" ||
//     msg.content === "quotes" ||
//     msg.content === "motivation"
//   ) {
//     getQuote().then((quote) => msg.channel.send(quote));
//   }

//   deleted because the source used older version of node
// client.on("ready", () => {
// List servers the bot is connected to
//   console.log("Servers:");
//   client.user.setActivity("To MOZART", { type: "LISTENING" });
//   client.guilds.cache.forEach((guild) => {
//     console.log(" - " + guild.name);

// List all channels
// guild.channels.cache.forEach((channel) => {
//   console.log(`--${channel.name} (${channel.type}) - ${channel.id}`);
// });
// General channel id : 857538005753135107
//   });
//   let generalChannel = client.channels.cache.get("857538005753135107");
//   const attachment = new Discord.Attachment("")
//   generalChannel.send("HACKERS!");
// });
// client.on("message", (receivedMessage) => {
//   if (receivedMessage.author === client.user) {
//     return;
//     receivedMessage.channel.send(
//       "Message recieved," +
//         receivedMessage.author.toString() +
//         " :" +
//         receivedMessage.content
//     );
//   }
// });
