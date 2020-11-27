require('dotenv').config();

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})

bot.on('text', (ctx) => {
    console.log(ctx.message.text);
    let reply = '';
    if (ctx.message.text.toLowerCase() === 'i love you durgesh') {
        reply = `Bus bus inta pyar ni. Ye lo link and durgesh bhai ko thank you bolo kiss ke sath and last me`;
    } else if (ctx.message.text.toLowerCase() === 'enter') {
        reply = `Do you love Durgesh ? Type 'YES' or 'NO'`;
    } else if (ctx.message.text.toLowerCase() === 'yes') {
        reply = `Well done! He also likes you :) . If you need series please type 'I LOVE YOU Durgesh'`;
    } else if (ctx.message.text.toLowerCase() === 'no') {
        reply = `Oh Ho ! Wrong answer. Please try again, otherwise you won't get series. Enter 'bye' to exit.`;
    } else if (ctx.message.text.toLowerCase() === 'bye') {
        reply = `Bye bye ! ta ta!`;
    } else if (ctx.message.text.toLowerCase() === 'thank you') {
        reply = `Love you too :p`;
    } else {
        reply = 'Hello, I am here to help you on behalf your bestie `Durgesh`. Please type `Enter` for more details';
    }

    // send a message to the chat acknowledging receipt of their message
    ctx.reply(reply);
});

bot.launch();