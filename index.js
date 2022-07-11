/*function addNum(num1 = 3, num2 = 1) {
    return num1 + num2;
}

console.log(addNum(5,7));*/
//or
const addNum = (num1 = 3, num2 = 1) => 
    console.log(num1 + num2);


addNum(5,7);

/*const x = 10;
const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log(color);
        break;
    case 'blue':
        console.log(color);
        break;
    default:
        console.log('color is not red or blue');
        break;
}*/
/*const x = 11;

const color = x > 10 ? 'red' : 'blue';
console.log(color);*/
/*const player = [
    {
        id: 0,
        name: 'Alfie',
        passed: true

    },
    {
        id: 1,
        name: 'Bogan',
        passed: true

    },
    {
        id: 2,
        name: 'Chad',
        passed: false

    }
];

const playerPass = player.filter(function(player) {
    return player.passed === true;
}).map(function(player) {
    return player.name;
}) ;
console.log(playerPass);*/
/*for(let i = 0; i < player.length;  i++ ) {
    console.log(player[i].playerName);

}*/
/*for(let playerStat of player) {
    console.log(playerStat.playerName)
}*/
/*player.forEach(function(playerStat) {
    console.log(playerStat.playerName)
});*/