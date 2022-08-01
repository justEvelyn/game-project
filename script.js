
/* 
- strength
-speed
-intelligence
- attack
-defence
-reflexes
top trumps rating

so you compare the stat with the highest number with the computer's and whoever has the highest takes the other person's card
*/

const trumps = [
{
id: 1, 
name: "Ladybug",

Strength: 60,
Speed: 80,
Intelligence: 95,
Attack: 70,
Defence: 65,
Skills: 90,
"Top trumps rating": 75,
image :"https://miraculousladybug.fandom.com/wiki/Marinette_Dupain-Cheng"
},

{
id: 2, 
name: "Cat Noir",

Strength: 75,
Speed: 80,
Intelligence: 60,
Attack: 85,
Defence: 55,
Skills: 70,
"Top trumps rating": 70,
image :"https://miraculousladybug.fandom.com/wiki/Adrien_Agreste"
},

{
id: 3, 
name: "Rena Rouge",

Strength: 30,
Speed: 50,
Intelligence: 90,
Attack: 45,
Defence: 75,
Skills: 95,
"Top trumps rating": 65,
image :"https://static.wikia.nocookie.net/lady-bug/images/2/22/Rena_Rouge_Square.png/revision/latest?cb=20190629171806"
},

{
id: 4, 
name: "Carapace",

Strength: 40,
Speed: 65,
Intelligence: 60,
Attack: 35,
Defence: 99,
Skills: 70,
"Top trumps rating": 60,
image:"https://i.pinimg.com/originals/58/b5/d5/58b5d59fd4f4ba21d9d4ec73b117df66.jpg"
},

{
id: 4, 
name: "Carapace",

Strength: 40,
Speed: 65,
Intelligence: 60,
Attack: 35,
Defence: 99,
Skills: 70,
"Top trumps rating": 60,
image :"https://i.pinimg.com/originals/58/b5/d5/58b5d59fd4f4ba21d9d4ec73b117df66.jpg"
},
    {
id: 5, 
name: "Viperion",

Strength: 45,
Speed: 70,
Intelligence: 80,
Attack: 35,
Defence:70,
Skills: 95,
"Top trumps rating": 65,
image :"https://static.wikia.nocookie.net/p__/images/a/a4/Viperion.png/revision/latest?cb=20210906004105&path-prefix=protagonist"
},

{
id: 6, 
name: "Pegasus",

Strength: 70,
Speed: 70,
Intelligence: 95,
Attack: 70,
Defence:65,
Skills: 85,
"Top trumps rating": 75,
image :"https://static.wikia.nocookie.net/vsbattles/images/a/ad/PegasusMLB.png/revision/latest?cb=20210209002959"
},

{
id: 7, 
name: "Ryuko ",

Strength: 70,
Speed: 70,
Intelligence: 95,
Attack: 70,
Defence:65,
Skills: 85,
"Top trumps rating": 75,
image  :"https://static.wikia.nocookie.net/lady-bug/images/4/47/Ryuko_Square.png/revision/latest?cb=20220614194443"
},

{
id: 8, 
name: "Bunnyx",

Strength: 60,
Speed: 70,
Intelligence: 80,
Attack: 65,
Defence:70,
Skills: 95,
"Top trumps rating": 75,
image:"https://static.wikia.nocookie.net/lady-bug/images/c/cc/Bunnyx_Square.png/revision/latest?cb=20220313111138"
},


{
id: 9, 
name: "KingMonkey",

Strength: 75,
Speed: 70,
Intelligence: 50,
Attack: 75,
Defence:70,
Skills: 55,
"Top trumps rating": 65,
image:"https://static.wikia.nocookie.net/lady-bug/images/c/cc/Bunnyx_Square.png/revision/latest?cb=20220313111138"
},



{
id: 10, 
name: "Vesperia",

Strength: 55,
Speed: 60,
Intelligence: 75,
Attack: 70,
Defence:50,
Skills: 70,
"Top trumps rating": 65,
image:"https://i.pinimg.com/474x/f4/08/e0/f408e0b835af86ea28706e3671835de9.jpg"
},

{
id: 11, 
name: "Pigella ",

Strength: 30,
Speed: 25,
Intelligence: 75,
Attack: 15,
Defence:10,
Skills: 35,
"Top trumps rating": 30,
image :"https://www.youloveit.com/uploads/posts/2021-05/1620412493_youloveit_com_pigella_pictures061.jpg"
},

{
id: 12, 
name: "Purple Tigress",

Strength: 30,
Speed: 25,
Intelligence: 75,
Attack: 15,
Defence:10,
Skills: 35,
"Top trumps rating": 30,
    image:"https://static.wikia.nocookie.net/lady-bug/images/2/22/Purple_Tigress_Square.png/revision/latest?cb=20220326212810"
    },

{
id: 13, 
name: "Miss Hound",
Strength: 60,
Speed: 70,
Intelligence: 85,
Attack: 55,
Defence:50,
Skills: 75,
"Top trumps rating": 65,
   image:"https://static.wikia.nocookie.net/lady-bug/images/a/ae/Miss_Hound_Square.png/revision/latest?cb=20220611153854"

},
{
id: 14, 
name: "Minotaurox",

Strength: 90,
Speed: 70,
Intelligence: 60,
Attack: 75,
Defence:95,
Skills: 50,
"Top trumps rating": 70,
  image:"https://static.wikia.nocookie.net/lady-bug/images/d/d7/Minotaurox_Square.png/revision/latest?cb=20220611153945"
},
{
id: 15, 
name: "Rooster Bold",

Strength: 45,
Speed: 70,
Intelligence: 65,
Attack: 85,
Defence:60,
Skills: 90,
"Top trumps rating": 70,
  image :"https://static.wikia.nocookie.net/lady-bug/images/d/d7/Minotaurox_Square.png/revision/latest?cb=20220611153945"
},


]

//console.log(trumps);

// put images into one class to make them all the same size

// function deckMaker(trumps) {
// // math.random doesnt work well so we use math.floor 

// for ( let i = 0; i < trumps.length; i++) {
//     let random = Math.floor(Math.random()*14)+1
       
//     //console.log(random)
//     trumps[random]
//     for(j in trumps[random]["base"]["Top trumps rating"]){
//         console.log(j)
//     }
//     //console.log(trumps[random][base][Skills]) 
// }
// }
// deckMaker(trumps);

let playarr = [];
let computerarr = [];
function deckMaker() {
let decklength = trumps.length;
let playercard= 0;
let computercard = 0;
while ( --decklength > -1) {
    let cardidx = Math.floor(Math.random()*(decklength))
    //cardidx selects the card. 
    let randomizedcard = trumps.splice(cardidx, 1) 

    if (playercard > computercard){
        computerarr.push(randomizedcard[0])
        computercard +=1
        
    } else if (playercard == computercard) {
        playarr.push(randomizedcard[0])
        playercard+=1
    }
}
}
deckMaker();
console.log(playarr)
console.log(computerarr)
// use "<table border = '1\1'>"
 

const cardContainer = document.getElementById("name");

for (var i in playarr) {
    const el = document.createElement('div')
    
    // el.setAttribrute('id', i)
    el.innerText= playarr[i]['strength']
cardContainer.appendChild(el)
}

//object.keys
//object.values