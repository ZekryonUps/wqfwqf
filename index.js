const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const token = "ODU0NDQwMjc0OTg1MjIyMTg1.YMj9hA.7CO-prUtSh6NrF6WsWbsg1k4kOk";
const prefix = "gg"
const config = require('./config.json');
const superagent = require('superagent'); //npm i superagent
const { MusicBot } = require('discord-music-system'); // Require the best package ever created on NPM (= require discord-music-system)
const { url } = require('inspector');
const { link, linkSync } = require('fs');

client.musicBot = new MusicBot(client, {
    ytApiKey: 'AIzaSyBnXWcIIqMApbrYWQ2dQJwY0E7tci17nzQ',
    prefix: 'gg', // Your bot prefix
    language: 'pt' // fr, en, es, pt
});

client.on('message', async message => {
    if(message.author.bot) {
        return;
    };
    client.musicBot.onMessage(message);
});   

  
    client.on('message', message => {
        if (message.content.startsWith('gghug')) { 
       let targetMember = message.mentions.users.first();
       if(!targetMember) return message.reply('preciso saber a quem vais dar um abracinho!');
           // message goes below!
           const images = ["https://i.postimg.cc/FsB5Z7H9/8572a1d1ebaa45fae290e6760b59caac.gif", "https://i.postimg.cc/Y9zBfRhV/8ruodNJ.gif", "https://i.postimg.cc/286Nh4mc/930932df483a048c1f15a65f19e97b36.gif", "https://i.postimg.cc/wjCCCZNZ/anime-couple-hug-gif-13.gif", "https://i.postimg.cc/W1qRfTd0/anime-hug-cry-gif-4.gif", "https://i.postimg.cc/nzkNQLWf/d6a08bbe22fee4a9.gif", "https://i.postimg.cc/0jtghNG0/tumblr-mkmipv-Ucx-H1s9s0bdo1-500.gif", "https://i.postimg.cc/RCGzWPrJ/XEs1SW-Q.gif", "https://i.imgur.com/JQrIBtw.gif", "https://i.imgur.com/r9aU2xv.gif", "https://i.imgur.com/FPznEhE.gif", ];
           const image = images[Math.floor(Math.random()* images.length)];
               let random = new Discord.MessageEmbed()
                 .setTitle(`${message.author.username} deu um abracinho a ${targetMember.username}`)
                 .setColor("#ff27e1")
                 .setImage(image)
           
               message.channel.send(random);
          }
   });
   
   client.on('message', message => {
    if (message.content.startsWith('ggslap')) { 
   let targetMember = message.mentions.users.first();
   if(!targetMember) return message.reply('precisas mencionar a quem vais dar uma chapada!');
       // message goes below!
       const images = ["https://i.imgur.com/xskxeu2.gif", "https://i.imgur.com/C4K3Vx2.gif", "https://i.imgur.com/qHNeBVU.gif", "https://1.bp.blogspot.com/-weYWkWqbJh4/YIrzHFFqVcI/AAAAAAACJeU/AmyAukNYNRYMKbn1pGw5mMaBuRvZkIdDQCPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B3%2B-%2BSenpai%2BMisses%2BNagatoro%2BShoulder%2BSlap.gif", "https://i.imgur.com/zPjb5lZ.gif", ];
       const image = images[Math.floor(Math.random()* images.length)];
           let random = new Discord.MessageEmbed()
             .setTitle(`${message.author.username} deu uma chapada a ${targetMember.username}`)
             .setColor("#ff27e1")
             .setImage(image)
       
           message.channel.send(random);
      }
}); 

client.on('message', message => {
  if (message.content.startsWith('ggkill')) { 
 let targetMember = message.mentions.users.first();
 if(!targetMember) return message.reply('precisas mencionar quem vais matar!');
     // message goes below!
     const images = ["https://i.postimg.cc/hjf3h0VT/1a8.gif", "https://i.postimg.cc/XY4H9WwV/AP-Shot.gif", "https://i.postimg.cc/MTCtHJ6J/KJsc.gif", "https://i.postimg.cc/sxW64D62/tenor.gif", "https://i.postimg.cc/tggBmzSw-/tenor-1.gif", "https://i.postimg.cc/jSc8X1Xy/VqJlRR8.gif", ];
     const image = images[Math.floor(Math.random()* images.length)];
         let random = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} matou ${targetMember.username}`)
           .setColor("#ff27e1")
           .setImage(image)
     
         message.channel.send(random);
    }
}); 

client.on('message', message => {
    if (message.content.startsWith('ggpepino')) { 
      let targetMember = message.mentions.users.first();
      if(!targetMember) return message.reply('preciso saber quem vai tar a tua frente!');
           let random = new Discord.MessageEmbed()
             .setTitle(`${message.author.username} comeu um pepino a frente de ${targetMember.username}`)
             .setColor("#ff27e1")
             .setImage('https://i.imgur.com/ZkUi5v7.gif')
       
           message.channel.send(random);
      }
}); 

client.on('message', message => {
    if (message.content.startsWith('ggkhead')) { 
   let targetMember = message.mentions.users.first();
   if(!targetMember) return message.reply('preciso saber a quem vais dar uma chapada na cabeça!');
       // message goes below!
       const images = ["https://i.imgur.com/Pra8Kt0.gif", "https://i.imgur.com/sZfh5hg.gif", "https://i.imgur.com/Aqrj0dV.gif", "https://i.imgur.com/AJazLiY.gif", ];
       const image = images[Math.floor(Math.random()* images.length)];
           let random = new Discord.MessageEmbed()
             .setTitle(`${message.author.username} bateu na cabeça de ${targetMember.username}`)
             .setColor("#ff27e1")
             .setImage(image)
       
           message.channel.send(random);
      }
});

client.on('message', message => {
  if (message.content.startsWith('ggpat')) { 
 let targetMember = message.mentions.users.first();
 if(!targetMember) return message.reply('preciso saber quem vais dar carinho!');
     // message goes below!
     const images = ["https://i.imgur.com/x3Omp1A.gif", "https://i.postimg.cc/bJBjdJMV/tumblr-peb6js73li1sk6fb9-1280.gif", "https://i.imgur.com/5FOEhDE.gif", "https://i.imgur.com/7uaqb1B.gif", "https://i.postimg.cc/zvHYhNYz/Blank-Gifted-Burro-size-restricted.gif", "https://i.imgur.com/tTFimZB.gif", ];
     const image = images[Math.floor(Math.random()* images.length)];
         let random = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} deu carinho a ${targetMember.username}`)
           .setColor("#ff27e1")
           .setImage(image)
     
         message.channel.send(random);
    }
});

client.on('message', message => {
  if (message.content.startsWith('ggkiss')) { 
 let targetMember = message.mentions.users.first();
 if(!targetMember) return message.reply('preciso saber quem vais dar um beijinho!');
     // message goes below!
     const images = ["https://i.postimg.cc/bwVXmdYy/tumblr-mo5jwh-Nu-Yn1s4dyyio1-500.gif", "https://i.postimg.cc/zvF6KGP1/tenor.gif", "https://i.postimg.cc/5tDhMGFD/Hopeful-Fabulous-Kouprey-max-1mb.gif", "https://i.postimg.cc/0yyRG7sX/e2703acdcffb8482d8df6aadbd270cdc03fccd5c-00.gif", "https://i.postimg.cc/XJFTN8fq/badfS3D.gif", "https://i.postimg.cc/qMLHCj9C/016c842cd25ae79f516c7d1dc98c9c7e.gif", ];
     const image = images[Math.floor(Math.random()* images.length)];
         let random = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} deu um beijo a ${targetMember.username}`)
           .setColor("#ff27e1")
           .setImage(image)
     
         message.channel.send(random);
    }
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .toLowerCase()
    .slice(prefix.length)
    .trim()
    .split(/\s+/);
  const [command, input] = args;

  if (command === 'clear' || command === 'c') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel
        .send(
          "You cant use this command since you're missing `manage_messages` perm",
        );
    }

    if (isNaN(input)) {
      return message.channel
        .send('quantas mensagens desejas apagar? Especifica por favor!')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    if (Number(input) < 0) {
      return message.channel
        .send('introduz um número positivo de messagens a deletar')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    // add an extra to delete the current message too
    const amount = Number(input) > 100
      ? 101
      : Number(input) + 1;

    message.channel.bulkDelete(amount, true)
    .then((_message) => {
      message.channel
        // do you want to include the current message here?
        // if not it should be ${_message.size - 1}
        .send(`Fiz uma limpeza a  \`${_message.size}\` mensagens \<:Woaaa:812552693566013500>`)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });
  }
});

client.login(token);