const discord = require('discord.js');
const config = require("./config.json");

const client = new discord.Client({
    intents: 3276799
});

client.on('ready', async ( client ) => {
    console.log('Estoy listo!')
});

client.on('messageCreate', async (message) => {

    if(message.author.bot) return;
    if(!message.content.startsWith('!')) return;

    try {
        const command = message.content.toLowerCase().slice(1).split(' ')[0];
        const executeCommand = require(`./commands/${command}.js`);
        executeCommand( message);
    } catch(error) {
        console.log(`${message.content} no es un comando valido.`);
    }
});

client.login(config.token);
