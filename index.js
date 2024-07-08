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

client.on('guildMemberAdd', async(member) => {
    const {user} = member;

    const embed = {
        title: `¡${user.username} se ha unido al servidor!`,
        description: 'Bienvenido seas al servidor, recuerda verificarte en el canal de #verificacion para tener acceso a todos los canales.',
        color: 0x5BFF8A,
        thumbnail: {url: user.avatarURL()}
    };

    const button = new discord.ActionRowBuilder().addComponents(
        new discord.ButtonBuilder({
            style: 3,
            label: 'Saludar!',
            emoji: '👋',
            customId: 'saludo'
        })
    )

    const channelId = config.channelId;
    client.channels.fetch(channelId).then(channel => channel.send({
        embeds: [embed],
        components: [button]
    }));
})

client.on('interactionCreate', async(interaction) => {
    if (!interaction.isButton()) return;
    if (interaction.customId == 'saludo') return interaction.reply({
        content: `${interaction.user} te da la bienvenida al servidor!`
    })
});

client.login(config.token);
