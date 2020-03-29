const { spawn } = require('child_process');

const Telegraf = require('telegraf')

const bot = new Telegraf('994908633:AAH1QNbGvtz0c_K58w1omzspZiEDtKXVR5k')

bot.command('mkdir', (ctx) => {
    const mkdir = spawn('mkdir', ['test']);
    return ctx.reply('Папка с иминем \'test\' создана')
})

bot.launch()