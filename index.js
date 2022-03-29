/**
 @Author Sassy (github.com/2CBS)
 @Discord Sassy#9088
 @Info This is a discord anti scam link bot in discord.js v13.
 */

// Import requirements and modules.
const Discord = require('discord.js');
const chalk = require('chalk');
const config = require('./config.json');
const fetch = require('node-fetch');
const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
	console.log('ready');
});

// Change these for the embed settings.
const embedTitle = 'Server Protection';
const embedDescription = 'This link has shown up in our database, please do not click it.';
const embedColor = 'fe4e62';

// Listening for messages with included scam links
client.on('messageCreate', function (message) {
	fetch('https://raw.githubusercontent.com/2CBS/Phisher/main/suspicious-links.json')
		.then(response => response.json())
		.then(data => {
			let t;
			data.domains.forEach(domain => {
				if (message.content.toLowerCase().includes(domain)) {
					let f = new Discord.MessageEmbed()
						.setTitle(embedTitle)
						.setDescription(embedDescription)
						.addField(`Suspicious Link`, `> ||*${domain}*||`)
						.addField('Message author', `> ${message.author.tag}`)
						.setColor('#' + embedColor)
						.setTimestamp();
					try {
						message.delete();
						message.channel
							.send({ embeds: [f] })
							.then(msg => {
								setTimeout(() => msg.delete(), 5000);
							})
							.catch(console.error);
						message.member.ban({ days: 7, reason: 'Member is been banned for sending scam links' });
						return console.log(`The member ${message.author.tag} is been banned from [${message.member.guild.name}] for sending scam links`);
					} catch {
						message.channel
							.send({ embeds: [f] })
							.then(msg => {
								setTimeout(() => msg.delete(), 5000);
							})
							.catch(console.error);
						message.member.ban({ days: 7, reason: 'Member is been banned for sending scam links' });
						return console.log(`The member ${message.author.tag} is been banned from [${message.member.guild.name}] for sending scam links`);
					}
					return;
				}
			});
		});
});

client.login(config.token);
