import { Injectable, OnInit } from "@angular/core";
import { Game } from "../game";

@Injectable({
  providedIn: "root"
})
export class GameService implements OnInit {
  game: Game[];

  constructor() {
    this.game = [
      {
        name: "Chess",
        id: "001",
        price: 100,
        availability: true,
        time: 4,
        players: 1
      },
      {
        name: "Carom",
        id: "002",
        price: 100,
        availability: false,
        time: 3,
        players: 3
      },
      {
        name: "Ludo",
        id: "003",
        price: 100,
        availability: false,
        time: 2,
        players: 4
      },
      {
        name: "Scribble",
        id: "004",
        price: 100,
        availability: true,
        time: 4,
        players: 2
      },
      {
        name: "Chess",
        id: "005",
        price: 100,
        availability: true,
        time: 4,
        players: 1
      },
      {
        name: "Carom",
        id: "006",
        price: 100,
        availability: false,
        time: 3,
        players: 3
      },
      {
        name: "Ludo",
        id: "007",
        price: 100,
        availability: true,
        time: 2,
        players: 4
      },
      {
        name: "Scribble",
        id: "008",
        price: 100,
        availability: false,
        time: 4,
        players: 2
      },
      {
        name: "Chess",
        id: "009",
        price: 100,
        availability: true,
        time: 4,
        players: 1
      },
      {
        name: "Carom",
        id: "010",
        price: 100,
        availability: true,
        time: 3,
        players: 3
      },
      {
        name: "Ludo",
        id: "011",
        price: 100,
        availability: false,
        time: 2,
        players: 4
      },
      {
        name: "Scribble",
        id: "012",
        price: 100,
        availability: false,
        time: 4,
        players: 2
      },
      {
        name: "Chess",
        id: "013",
        price: 100,
        availability: true,
        time: 4,
        players: 1
      },
      {
        name: "Carom",
        id: "014",
        price: 100,
        availability: false,
        time: 3,
        players: 3
      },
      {
        name: "Ludo",
        id: "015",
        price: 100,
        availability: false,
        time: 2,
        players: 4
      },
      {
        name: "Scribble",
        id: "016",
        price: 100,
        availability: true,
        time: 4,
        players: 2
      },
      {
        name: "Chess",
        id: "017",
        price: 100,
        availability: true,
        time: 4,
        players: 1
      },
      {
        name: "Carom",
        id: "018",
        price: 100,
        availability: true,
        time: 3,
        players: 3
      },
      {
        name: "Ludo",
        id: "019",
        price: 100,
        availability: false,
        time: 2,
        players: 4
      },
      {
        name: "Scribble",
        id: "020",
        price: 100,
        availability: true,
        time: 4,
        players: 2
      },
      {
        name: "Chess",
        id: "021",
        price: 100,
        availability: true,
        time: 4,
        players: 1
      },
      {
        name: "Carom",
        id: "022",
        price: 100,
        availability: false,
        time: 3,
        players: 3
      },
      {
        name: "Ludo",
        id: "023",
        price: 100,
        availability: true,
        time: 2,
        players: 4
      },
      {
        name: "Scribble",
        id: "024",
        price: 100,
        availability: false,
        time: 4,
        players: 2
      }
    ];
  }

  ngOnInit() {
    this.getGames();
  }

  getGames(): Game[] {
    return this.game;
  }
}
