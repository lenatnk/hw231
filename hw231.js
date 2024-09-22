const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let arr = [];

/* 
Использование обычного цикла for:

for (let i = 0; i < players.length; i++) {
  console.log(players[i].scorePoints);
}
*/

//Задала i через let, но также можно и без let
for (let i in players) {
  arr.push(players[i].scorePoints);
}

let maxPoints = Math.max(...arr);

let maxIndex = arr.indexOf(Math.max(...arr));

console.log(`У игрока ${players[maxIndex].name}: ${maxPoints} очков`);
