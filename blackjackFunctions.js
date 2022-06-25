// blackjackFunctions.js

const bjClass = require("./blackjackClass.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");

var gameList = new Array();


module.exports = {
    
    
    initialise: function(){
        return "blackjack loaded";
    },
    
    createGame: async function(author){
        //create game and assign host
        var host = new bjClass.Player(author.username, author.id, 0);
        
        //attempt to create deck
        try{
            let deck = await createDeck();
            let deckID = JSON.stringify(deck.deck_id).replace(/["]+/g, "");
            gameList.push(new bjClass.Game(host, 50, deckID));

        }
        catch(err){
            console.log(err, "error accessing deck of cards API")
        }
        
        //print game object to console
        console.log(gameList[0]);
        
        
                
        //draw hands
        for(let index = 0; index < gameList[0].playerList.length; index++){
            
            let player = gameList[0].playerList[index];
            let deckID = gameList[0].deckID;
            player.newHand(deckID);
            console.log("creating hand for " + player.username);
            
        }
        
        return("game created, host: " + author.username);
    },
    
    startGame: function(author, bot){

        for(let index = 0; index < gameList.length; index++){
            if(gameList[index].host.id == author.id){
                gameList[index].addPlayer(bot.username, bot.id, 0);
                gameList[index].newRound();
                console.log(gameList[index]);
                return "game started";
            }
        }
        return "game failed to start";
    }
    
  

    
}

async function createDeck(){
    
        var response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        
        var deck = await response.json();
        console.log(JSON.stringify(deck.deck_id));
        return(deck);
}
