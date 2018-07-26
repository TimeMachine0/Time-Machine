const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("//");
var euh = ("//daily suggest")
var dailycontent = ("");
var dailynumber = ("");
var user = ("");
var messageid = ("");
var by = ("");
var say1 = ("");
var say2 = ("");
var imgpts = ('https://i.imgur.com/JkjsSBt.png');
var color = ('#ffccff');
var hum = ('');

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Time To Dash │ //help', type: 0}});
    console.log("Le bot est bien connecté et prêt à en découdre !")
})

bot.login(TOKEN);

bot.on('message', message => {

    //Help

    if (message.content.startsWith(prefix + "help") || message.content.startsWith(prefix + "help ")){
        if (message.content.substring(8) !== ""){
            if (message.content.substring(7,8) !== '#'){
                hum = "#"
            }
            color = message.content.substring(8,14)
            message.channel.send("**__Pour plus d'informations sur les couleurs en HTML, consultez ce site__ :**\n\n    *https://www.w3schools.com/colors/colors_picker.asp*\n\n================================================")
        }
        var Helper = new Discord.RichEmbed()
            .setColor(hum + color)
                .addField("**__Voici la liste des commandes du bot Time Machine__ :**","▪️\n**//help** *[#couleur en HTML* (optionnel)*]* : Qui permet d'afficher la liste des commandes disponibles. \n▪️\n **//hertz** *[clear/mobile/50/60/75/120/144/180/200/240]* : Qui permet de changer son nombre de hertz dans votre rôle. \n▪️\n **//point** : Qui permet d'afficher la liste des points TTD sur le serveur. \n▪️\n **//daily suggest** *[votre suggestion]* : Qui permet d'envoyer une suggestion pour un futur Daily Demon.\n*(Attention les suggestions jugées de trolls ou de spams peuvent conduire à une sanction)*\n▪️\n**//say** *[#salon* (optionnel)*] [votre message]* (réservée aux Vipou Plusse) : Qui permet d'envoyer un message dans un autre salon via Time Machine.\n*(Remarque: Si vous n'êtes pas Vipou Plusse ou que vous ne mentionnez pas le salon, votre message s'enverra dans le salon ou la commande est inscrite)*\n▪️\n**//daily tag** *[on/off]* : Qui permet d'activer ou non la notification (tag) liées aux Daily Demons.\n▪️")
            .setColor(hum + color)
                .addField("**__Voici la liste des commandes du bot réservées aux fondateurs__ :**","▪️\n**//daily** *[le daily du jour]* (réservée aux Fondateurs) : Qui permet de mettre automatiquement le nouveau Daily.")
        color = '#ffccff'
        hum = ""
        message.channel.sendEmbed(Helper);
        console.log("La commande //help a été demandé !")
    }

    //Points

    if (message.content === prefix + "point"){
    message.channel.send("", {files: [imgpts]});
    console.log("La commande //point a été demandé !")
    }
    if (message.channel.id === '467368645652119552' && message.content.startsWith(prefix + 'set point ')){
        var str = message.content
        imgpts = str.substring(12)
        message.channel.send("```La nouvelle image pour le //point est bien à jour !```")
    }
    
    //Daily

    if (message.content.startsWith(prefix + 'daily ') && (message.channel.id === "468198977406369802")) {
        var str = message.content
        messageid = message.id
        user = message.author.id
        dailynumber = ( Date.now() - Date.parse('21 Apr 2018 00:00:00 GMT') ) / 86400000
        dailycontent = str.substring(8)
        message.channel.send("By ?")
        message.delete(20000)
    }
    if (message.content === "By ?" && message.author.id === '456999665745920003'){
        message.delete(20000)
    }
    if (message.author.id === user && messageid !== message.id && message.channel.id === '468198977406369802'){
        by = message.content
        bot.channels.get('465835077251891200').send("========================================\n                    <:harddemon:465847905190674433> Daily Demon #" + ~~dailynumber + " <:harddemon:465847905190674433>\n\nQuelle difficulté pour **" + dailycontent + "** *de " + by + "* ?\n========================================")
        bot.channels.get('465835077251891200').send("<@&471787988687257643>")
        user = ("");
        messageid = ("");
        message.delete(10000)
    }
    if (message.channel.id === '465835077251891200' && message.content === '<@&471787988687257643>'){
        message.delete()
    }

    //daily suggest

    if (message.content.startsWith(prefix + "daily suggest ") && message.content !== "//daily suggest"){
        message.channel.send("``` Votre suggestion a bien été prise en compte ! ```")
        const messageSlice = message.content.slice(euh.lenght).trim();
        bot.channels.get('465835125704228868').sendMessage("**Nouvelle suggestion de <@" + message.author.id + "> :**    " + messageSlice.substring(16))
        console.log("La commande //daily suggest " + messageSlice.substring(16) + " a été demandé !")
        bot.channels.get('465835125704228868').send("<@!249590766605828096>")
        bot.channels.get('465835125704228868').send("<@!176572145550360577>")
    }

    if (message.content === "<@!249590766605828096>" && message.channel.id === "465835125704228868"){
        message.delete()
    }
    if (message.content === "<@!176572145550360577>" && message.channel.id === "465835125704228868"){
        message.delete()
    }

    if (message.channel.id === "465835125704228868"){
        message.react("✅")
        message.react("❌")
        message.react("🤔")
        message.react("❔")
    }

    if (message.channel.id === "468198977406369802"){
        message.react("▶")
    }

    //Nombre de hertz

    if (message.content === prefix + "hertz mobile"){
        message.channel.send("```Votre rôle est bien à jour ! [Mobile]```")
        const guildMember = message.member;
        guildMember.addRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz mobile a été demandé !")
    }
    
    if (message.content === prefix + "hertz 50"){
        message.channel.send("```Votre rôle est bien à jour ! [50Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.addRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz 50 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 60"){
        message.channel.send("```Votre rôle est bien à jour ! [60Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.addRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz 60 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 75"){
        message.channel.send("```Votre rôle est bien à jour ! [75Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.addRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz 75 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 120"){
        message.channel.send("```Votre rôle est bien à jour ! [120Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.addRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz 120 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 144"){
        message.channel.send("```Votre rôle est bien à jour ! [144Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.addRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz 144 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 180"){
        message.channel.send("```Votre rôle est bien à jour ! [180Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.addRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz 180 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 200"){
        message.channel.send("```Votre rôle est bien à jour ! [200Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.addRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz 200 a été demandé !")
    }
    
    if (message.content === prefix + "hertz 240"){
        message.channel.send("```Votre rôle est bien à jour ! [240Hz]```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.addRole('467366687558205440');
        console.log("La commande //hertz 240 a été demandé !")
    }

    if (message.content === prefix + "hertz clear"){
        message.channel.send("```Votre rôle a bien été supprimé !```")
        const guildMember = message.member;
        guildMember.removeRole('467365532845211658');
        guildMember.removeRole('467366214197313545');
        guildMember.removeRole('467365745743888397');
        guildMember.removeRole('467366085067276299');
        guildMember.removeRole('467366286138146826');
        guildMember.removeRole('467366466057011221');
        guildMember.removeRole('467366516325875712');
        guildMember.removeRole('467366627675996163');
        guildMember.removeRole('467366687558205440');
        console.log("La commande //hertz clear a été demandé !")
    }

    //Reaction daily-demon

    if (message.channel.id === "465835077251891200"){
        message.react("465847755751948298")
        message.react("465847781215698944")
        message.react("465847905190674433")
        message.react("465847940574085120")
        message.react("465847953677090826")
    }

    //Daily tag

    if (message.content === prefix + "daily tag on"){
        message.member.addRole('471787988687257643')
        message.channel.send("```Votre option est bien à jour ! [Daily tag ON]```")
    }
    if (message.content === prefix + "daily tag off"){
        message.member.removeRole('471787988687257643')
        message.channel.send("```Votre option est bien à jour ! [Daily tag OFF]```")
    }

    //spam

    if (message.channel.id === "465834823890763806"){
        message.react("465847953677090826")
        message.react("🗽")
    }

    // Systeme de daily suggest

    //Say

    if (message.content.startsWith(prefix + 'say ')){
        const messageSlice = message.content.slice(euh.lenght).trim();
        say1 = messageSlice.substring(8,26)
        say2 = messageSlice.substring(27)
        if (message.guild.channels.has(say1)){
            if (message.member.roles.has('396725207735336970')){
                if (say1 === '465824803962486794' || say1 === '465834019028992000' || say1 === '465835149670481930' || say1 === '465834003753205760' || say1 === '465834044609789953' || say1 === '465834823890763806' || say1 === '465844447821824010' || say1 === '465844588553175041' || say1 === '465844640352960522' || say1 === '465905695087263754'){
                    bot.channels.get(say1).send(say2)
                }
                else{
                    message.channel.send("Désolé, je ne peut pas érire dans ce salon...")
                }
            }
            else{
                say1 = message.channel.id
                if (say1 === '465824803962486794' || say1 === '465834019028992000' || say1 === '465835149670481930' || say1 === '465834003753205760' || say1 === '465834044609789953' || say1 === '465834823890763806' || say1 === '465844447821824010' || say1 === '465844588553175041' || say1 === '465844640352960522' || say1 === '465905695087263754'){
                    message.channel.send(messageSlice.substring(6))
                }
                else{
                    message.channel.send("Désolé, je ne peut pas érire dans ce salon...")
                }
            }
        }
        else{
            say1 = message.channel.id
            if (say1 === '465824803962486794' || say1 === '465834019028992000' || say1 === '465835149670481930' || say1 === '465834003753205760' || say1 === '465834044609789953' || say1 === '465834823890763806' || say1 === '465844447821824010' || say1 === '465844588553175041' || say1 === '465844640352960522' || say1 === '465905695087263754'){
                message.channel.send(messageSlice.substring(6))
            }
            else{
                message.channel.send("Désolé, je ne peut pas érire dans ce salon...")
            }
        }
    }

    //Time Event
    
    if (message.content === "je participe" && message.channel.id === '467823968263340042'){
        message.channel.send("```Parfait, vous êtes enregistrés en tant que participant.```")
        message.member.addRole('467823076587995145');
    }

    if (message.channel.id === "467823968263340042" && message.content !== "```Parfait, vous êtes enregistrés en tant que participant.```" && message.content !== "```Bah décide toi enculé.```"){
        message.delete()
    }
    if (message.channel.id === "467823968263340042"){
        message.delete(5000)
    }

    if (message.content === "ou pas" && message.channel.id === '467823968263340042'){
        message.channel.send("```Bah décide toi enculé.```")
        message.member.removeRole('467823076587995145');
    }

    //t co ?

    if (message.content === '<@!456999665745920003>' || message.content === '<@456999665745920003>'){
        message.channel.send("Je suis bien connecté, tu peux m'utiliser !")
    }

    
});

bot.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === '465835125704228868'){

        if (reaction.emoji.name === '❌' && (reaction.count === 3)){
            const messageSlice = reaction.message.content.slice(euh.lenght).trim();
            reaction.message.delete()
            bot.channels.get('465835203617882123').sendMessage("**Désolé, votre suggestion n'a pas été retenue " + messageSlice.substring(25))
            reaction.count = 0
        }

        if (reaction.emoji.name === '✅' && (reaction.count === 3)){
            const messageSlice = reaction.message.content.slice(euh.lenght).trim();
            bot.channels.get('465835203617882123').sendMessage("**Félicitation, votre suggestion a été retenue " + messageSlice.substring(25))
            bot.channels.get('468198977406369802').sendMessage("**Suggestion de " + messageSlice.substring(25))
            reaction.message.delete()
            reaction.count = 0
        }

        if (reaction.emoji.name === '🤔' && (reaction.count === 3)){
            const messageSlice = reaction.message.content.slice(euh.lenght).trim();
            reaction.message.delete()
            bot.channels.get('465835203617882123').sendMessage("**Attention ! Votre suggestion a été jugée troll ou spam, préparez vous à une sanction " + messageSlice.substring(25))
            reaction.count = 0
        }

    }
    if (reaction.message.channel.id === '468198977406369802'){
        if (reaction.emoji.name === '▶' && (reaction.count === 2)){
            const messageSlice = reaction.message.content.slice(euh.lenght).trim();
            reaction.message.delete()
            bot.channels.get('465835203617882123').send("**Bravo " + messageSlice.substring(16,37) + " , votre suggestion est finalement passée en Daily Demon !**")
        }
    }
});
