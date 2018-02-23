#!/usr/bin/env node
const argv = require('yargs').argv

// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }


let choice;
let randomNum = Math.floor(Math.random() * 3);
switch(randomNum) {
  case 0:
    choice = "rock"
    break;
  case 1:
    choice = "paper"
    break;
  case 2:
    choice = "scissors"
    break;
};


class Player {
  constructor(move) {
    this.move = move || choice
  }
}

class Game {
  constructor() {
    this.playerHuman = new Player(argv.move);
    this.playerComputer = new Player();
    this.string = ''
  }

  play() {
    if (this.playerHuman.move === this.playerComputer.move) {
      this.string = '~Tie game.~';
    }

    if (this.playerHuman.move === "rock" && this.playerComputer.move === "scissors" || this.playerHuman.move === "paper" && this.playerComputer.move === "rock" || this.playerHuman.move === "scissors" && this.playerComputer.move === "paper") {
      this.string = '~Player wins.~';
      return;
    } else {
      this.string = '~Computer wins.~';
    }
  }

  result() {
    console.log(`Playing a game of Roshambo against the computer.`);
    console.log(`Player plays ${this.playerHuman.move}!`);
    console.log(`Computer plays ${this.playerComputer.move}!`);
    console.log(`${this.string}`);
  }

}


let playGame = new(Game)
playGame.play();
playGame.result();
