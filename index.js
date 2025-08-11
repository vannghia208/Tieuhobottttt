const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Bot đã online: ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'banana') {
        message.reply(`\`\`\`lua
-- Banana Script
loadstring(game:HttpGet("https://banana.com/script.lua"))()
\`\`\``);
    }
});

client.login(process.env.TOKEN);
