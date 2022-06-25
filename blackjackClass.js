// blackjackClass.js

const fetch = require("node-fetch");


module.exports = {
    Card: class{
        
        constructor(value, rank, suit, name){
            this.value = value;
            this.rank = rank;
            this.suit = suit;
            this.name = name;    
        } 
    },

    Game: class{
        constructor(host, stakes, deckID){
            this.host = host;
            this.playerList = new Array();
            this.playerList.push(this.host);
                    
            this.deckID = deckID

            this.round = 0;
            
            if(stakes == null){
                this.stakes = 50;
            }else {
                this.stakes = stakes;
            }
        }
        
        addPlayer(){
            return "empty Game.addPlayer command";
        }
        
        listPlayers(){
            let message = "The current players in this game are: "
            for(let index = 0; index < playerList.length; index++){
                message += (playerList[index].name + ", ");
            }
            return message;
        }
        
        newRound(){
            return;
        }
        
        endRound(){
            return;
        }
    },
    
    Player: class{
        
        constructor(username, id, chips){
                //this.hand = newHand(pID);
                this.username = username;
                this.id = id;
                this.chips = chips;                
                this.alive = true;
        }
        
        
        async newHand(deckID){
            try{
            
            console.log("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=2");
            
            let response = await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=2");
            let myJSON = await response.json();
            
            console.log(this.username + "'s hand contains: " + 
                        JSON.stringify(myJSON.cards[0].value) +
                        JSON.stringify(myJSON.cards[0].suit) +
                        JSON.stringify(myJSON.cards[1].value) +
                        JSON.stringify(myJSON.cards[1].suit)
                       );
            }
            catch(err){
                console.log(err, "error drawing cards");
                
        }
            
        console.log("hand created for " + this.username);
            
        }
        
        addChips(chips){
            return "empty addChips command";
        }
        
        resetChips(){
            return "empty resetChips command";   
        }
        
        bet(chips){
            return "empty bet command";
        }
        
        draw(){
            return "empty draw command";
        }
        
        stick(){
            return "empty stick command";
        }
        
        checkAlive(){
            if(this.chips >= 0){
                this.alive = false;
            }
            return;
        }
    },
    
    Hand: class{
        
        constructor(){
            this.cards = new Array();
            this.owner;
        }

        
        addCard(card){
            this.cards.push(card);
            return;
        }
        
        sumHand(){
            let sum = 0;
            for(let index = 0; index < cards.length(); index++){
                let n = cards[index].value
                sum += n;
            }
            return sum;
        }
        
        toString(){
            
            let handStr = new Array();
            
            for(let index = 0; index < cards.length(); index++){
                let n = cards[index].name;
                let r = cards[index].rank;
                
                handStr.append(n + " " + r + ",");
            }
            
            return;
        }
    }
}
/*
class Player{
    
    async newHand(deckID){
        try{
            
            console.log("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=2");
            
            let response = await fetch("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=2");
            let myJSON = await response.json();
            
            console.log(this.username + "'s hand contains: " + 
                        JSON.stringify(myJSON.cards[0].value) +
                        JSON.stringify(myJSON.cards[0].suit) +
                        JSON.stringify(myJSON.cards[1].value) +
                        JSON.stringify(myJSON.cards[1].suit)
                       );
            }
            catch(err){
                console.log(err, "error drawing cards");
        }
        console.log("hand created for " + this.username);
        return;
    }
}
*/

class Game{
    
    addPlayer(username, id, chips){
            let player = new Player(username, id, chips)
            this.playerList.push(player);
            return "added player: " + player.username;
    }
    
    newRound(){
        this.round += 1;
            
            for(let index = 0; index < this.playerList.length; index++){
                this.playerList[index].newHand();
            }
        return;
    }
    
}