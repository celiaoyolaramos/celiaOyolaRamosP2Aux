//**********************PREGUNTA 1**********************************************************
const game ={
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players:[
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score:'4.0',
    scored:['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th,2037',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};
let players1=[];
let players2=[];
const gk='Neuer';
let fieldPlayers=['Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',]
let allPlayers=[game.players[0]+ game.players[1]];
let players1Final=[...game.players[0],'Thiago','Coutino','Perisic'];
console.log(allPlayers);
console.log(players1Final);
let list =game.odds;
let team1=list.team1;
let draw=list.x;
let team2=list.team2;
console.log(team1);
console.log(draw);
console.log(team2);

//***********************************PREGUNTA 2*********************************************
import { camelCase } from 'lodash';
let palabra='';
let frase='underscore_case first_name Some_Variable calculate_AGE delayed_departure ';

for(let i=0;i<frase.length;i++){
    if(frase[i]!=' '){
        palabra+=frase[i];
    }
    else{
        console.log(camelCase(palabra)+' ');
        palabra='';
    }
};
