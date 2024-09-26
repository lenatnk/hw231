const players = [
  { name: "Игрок 1", scorePoints: -20 },
  { name: "Игрок 2", scorePoints: 15 },
  { name: "Игрок 3", scorePoints: -5 },
  { name: "Игрок 4", scorePoints: 10 },
  { name: "Игрок 5", scorePoints: 10.5 },
  { name: "Игрок 6", scorePoints: 0 },
];

let arr = [];

for (let i in players) {
  arr.push(players[i].scorePoints);
}

let maxPoints = Math.max(...arr);

let maxIndex = arr.indexOf(Math.max(...arr));

console.log(`У игрока ${players[maxIndex].name}: ${maxPoints} очков`);
