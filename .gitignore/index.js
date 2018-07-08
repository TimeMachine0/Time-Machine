const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("//");
var euh = ("//daily suggest")
b=0

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Time To Dash │ //help', type: 0}});
    console.log("Le bot est bien connecté et prêt à en découdre !")
})

bot.login('NDU2OTk5NjY1NzQ1OTIwMDAz.DgSt4w.-OLIh_dfl14FnI8Xu6Is6tUrBDA');

bot.on('message', message => {

    //Help

    if (message.content === prefix + "help"){
        var Helper = new Discord.RichEmbed()
            .setColor('#ffccff')
                .addField("**Voici la liste des commandes du bot Time Machine :**","▪️\n**//help** : Qui permet d'afficher la liste des commandes disponibles. \n \n **//hertz** *[clear/mobile/50/60/75/120/144/180/200/240]* : Qui permet de changer son nombre de hertz dans votre rôle. \n \n **//point** : Qui permet d'afficher la liste des points TTD sur le serveur. \n \n **//daily suggest** *[votre suggestion]* : Qui permet d'envoyer une suggestion pour un futur Daily Demon.\n*(Attention les suggestions jugées de trolls ou de spams peuvent conduire à une sanction)*")
        message.channel.sendEmbed(Helper);
        console.log("La commande //help a été demandé !")
    }

    //Points

    if (message.content === prefix + "point"){
    message.channel.send("", {files: ["https://i.imgur.com/aoMqkKo.png"]});
    console.log("La commande //point a été demandé !")
    }
    
    //Daily

    //if (message.content.startsWith('//daily ') && (message.channel.id === "458737686245670912")) {
    //    var str = message.content
    //    message.channel.sendMessage(str.substring(8))
    //    g = ( Date.now() - Date.parse('21 Apr 2018 00:00:00 GMT') ) / 86400000
    //    console.log(~~g)
    //    b = str.substring(8)
    //}

    //daily suggest

    if (message.content.startsWith(prefix + "daily suggest ") && message.content !== "//daily suggest"){
    message.channel.send("``` Votre suggestion a bien été prise en compte ! ```")
    const messageSlice = message.content.slice(euh.lenght).trim();
    bot.channels.get('465199290957168680').sendMessage("**Nouvelle suggestion de <@" + message.author.id + "> :**    " + messageSlice.substring(16))
    console.log("La commande //daily suggest " + messageSlice.substring(16) + " a été demandé !")
    bot.channels.get('465199290957168680').send("<@!249590766605828096>")
    }

    if (message.content === "<@!249590766605828096>" && message.channel.id === "465199290957168680"){
        message.delete()
    }

    if (message.channel.id === "465199290957168680"){
        message.react("✅")
        message.react("❌")
        message.react("🤔")
        message.react("❔")
    }

    //Nombre de hertz

    if (message.content === prefix + "hertz mobile"){
        message.channel.send("```Votre rôle est bien à jour ! [Mobile]```")
        const guildMember = message.member;
        guildMember.addRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz mobile a été demandé !")
    }
    
    if (message.content === prefix + "hertz 50"){
        message.channel.send("```Votre rôle est bien à jour ! [50Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.addRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz 50 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 60"){
        message.channel.send("```Votre rôle est bien à jour ! [60Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.addRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz 60 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 75"){
        message.channel.send("```Votre rôle est bien à jour ! [75Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.addRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz 75 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 120"){
        message.channel.send("```Votre rôle est bien à jour ! [120Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.addRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz 120 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 144"){
        message.channel.send("```Votre rôle est bien à jour ! [144Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.addRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz 144 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 180"){
        message.channel.send("```Votre rôle est bien à jour ! [180Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.addRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz 180 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 200"){
        message.channel.send("```Votre rôle est bien à jour !* [200Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.addRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz 200 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 240"){
        message.channel.send("```Votre rôle est bien à jour ! [240Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.addRole('460607268610637825');
        console.log("La commande //hertz 240 a été demandé !")
    }

    if (message.content === prefix + "hertz clear"){
        message.channel.send("```Votre rôle a bien été supprimé !```")
        const guildMember = message.member;
        guildMember.removeRole('440153549037371413');
        guildMember.removeRole('460606285818232843');
        guildMember.removeRole('396727727253880843');
        guildMember.removeRole('460605332410859520');
        guildMember.removeRole('460606431889063936');
        guildMember.removeRole('396727812934860801');
        guildMember.removeRole('460606872962203648');
        guildMember.removeRole('460607089925160970');
        guildMember.removeRole('460607268610637825');
        console.log("La commande //hertz clear a été demandé !")
    }

    //Reaction daily-demon

    if (message.channel.id === "437715223852482560"){
        message.react("437727879883915264")
        message.react("437727977015345162")
        message.react("437728093013278720")
        message.react("437728148784676864")
        message.react("437728197237276682")
        b = 0
    }

    //spam

    if (message.channel.id === "412320437301936129"){
        message.react("437728197237276682")
        message.react("🗽")
    }

    // Systeme de daily suggest

    bot.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === '465199290957168680'){

            if (reaction.emoji.name === '❌' && (reaction.count === 2)){
                const messageSlice = reaction.message.content.slice(euh.lenght).trim();
                reaction.message.delete()
                bot.channels.get('465541453381238795').sendMessage("**Désolé, votre suggestion n'a pas été retenue " + messageSlice.substring(25))
                reaction.count = 0
            }

            if (reaction.emoji.name === '✅' && (reaction.count === 2)){
                const messageSlice = reaction.message.content.slice(euh.lenght).trim();
                bot.channels.get('465541453381238795').sendMessage("**Félicitation, votre suggestion a été retenue " + messageSlice.substring(25))
                reaction.count = 0
            }

            if (reaction.emoji.name === '🤔' && (reaction.count === 2)){
                const messageSlice = reaction.message.content.slice(euh.lenght).trim();
                reaction.message.delete()
                bot.channels.get('465541453381238795').sendMessage("**Attention ! Votre suggestion a été jugée troll ou spam, préparez vous à une sanction " + messageSlice.substring(25))
                reaction.count = 0
            }

        }    
    });
});
