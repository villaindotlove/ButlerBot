//cut code

 /*
    charList1 = new Array("a","b","c","d","e");
    charList2 = new Array("f","g","h","i","j");
    charList3 = new Array("k","l","m","n","o");
    charList4 = new Array("p","q","r","s","t");
    charList5 = new Array("u","v","w","x","y","z");
    
    message1 = "It doesn't seem likely, does it?";
    message2 = "Absolutely not!";
    message3 = "I would appreciate it if you were not so indecent in the future.";
    message4 = "Now that seems like a certainty";
    message5 = "Outlook: good."
    
                         
    let message = new Array(message1, message2, message3, message4, message5);
    console.log("list of messages: " + message);
    console.log(message[0]);
    
    charFull = new Array(charList1, charList2, charList3, charList4, charList5);
    console.log("list of character lists: " + charFull);
    
    for(index = 0; index < charFull.length; index++){
        charFull[index].push(message[index]);
        console.log("message " + index + message[index]);
    }
    console.log(charFull);
    console.log(charFull[0]);
    console.log("length: " + charFull.length);
    */
    
    ///list channels in console
    /*
    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })
    */
    
    /*
        console.log("successfully received question");
        
        var obj = {
            question: []
        }
        var json = JSON.stringify(obj);

        
        fs.readFile('./Rquestions.json', 'utf8', function readFileCallback(err, data){
            if(err){
                console.log(err);
            }else{
                obj = JSON.parse(data); //now it an object
                console.log(obj.toString());
                obj.table.push({id: 2, square:3}); //add some data
                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('questions.json', json, 'utf8', callback); // write it back 
            }
    })*/

  /*
    for (index = 0; index < charFull.length; index++){
        let list = charFull[index];
        console.log("checking " + list.toString());
        for(index2 = 0; index2 < (list.length-1); index2++){
            let c = list[index2].toString();
            console.log("comparing character: " + c);
            if(q.startsWith(c)){
                message = list[(list.length)-1];
                //message = message.toString();
                receivedMessage.channel.send(message);
                console.log("successfully answered question");
                return
            }
        }
    }
    */