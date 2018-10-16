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
        price: 10,
        availability: true,
        time: 4,
        players: 1,
        rating: 4
      },
      {
        name: "Carom",
        id: "002",
        price: 10,
        availability: false,
        time: 3,
        players: 3,
        rating: 4
      },
      {
        name: "Ludo",
        id: "003",
        price: 10,
        availability: false,
        time: 2,
        players: 4,
        rating: 5
      },
      {
        name: "Scribble",
        id: "004",
        price: 10,
        availability: true,
        time: 4,
        players: 2,
        rating: 4
      },
      {
        name: "Chess",
        id: "005",
        price: 10,
        availability: true,
        time: 4,
        players: 1,
        rating: 3
      },
      {
        name: "Carom",
        id: "006",
        price: 10,
        availability: false,
        time: 3,
        players: 3,
        rating: 5
      },
      {
        name: "Ludo",
        id: "007",
        price: 10,
        availability: true,
        time: 2,
        players: 4,
        rating: 3
      },
      {
        name: "Scribble",
        id: "008",
        price: 0,
        availability: false,
        time: 4,
        players: 2,
        rating: 5
      },
      {
        name: "Chess",
        id: "009",
        price: 10,
        availability: true,
        time: 4,
        players: 1,
        rating: 4
      },
      {
        name: "Carom",
        id: "010",
        price: 10,
        availability: true,
        time: 3,
        players: 3,
        rating: 3
      },
      {
        name: "Ludo",
        id: "011",
        price: 10,
        availability: false,
        time: 2,
        players: 4,
        rating: 1
      },
      {
        name: "Scribble",
        id: "012",
        price: 10,
        availability: false,
        time: 4,
        players: 2,
        rating: 3.5
      },
      {
        name: "Chess",
        id: "013",
        price: 10,
        availability: true,
        time: 4,
        players: 1,
        rating: 1
      },
      {
        name: "Carom",
        id: "014",
        price: 10,
        availability: false,
        time: 3,
        players: 3,
        rating: 4
      },
      {
        name: "Ludo",
        id: "015",
        price: 5,
        availability: false,
        time: 2,
        players: 4,
        rating: 4
      },
      {
        name: "Scribble",
        id: "016",
        price: 10,
        availability: true,
        time: 4,
        players: 2,
        rating: 1
      },
      {
        name: "Chess",
        id: "017",
        price: 12,
        availability: true,
        time: 4,
        players: 1,
        rating: 2.5
      },
      {
        name: "Carom",
        id: "018",
        price: 28,
        availability: true,
        time: 3,
        players: 3,
        rating: 4
      },
      {
        name: "Ludo",
        id: "019",
        price: 10,
        availability: false,
        time: 2,
        players: 4,
        rating: 2.5
      },
      {
        name: "Scribble",
        id: "020",
        price: 20,
        availability: true,
        time: 4,
        players: 2,
        rating: 3.5
      },
      {
        name: "Chess",
        id: "021",
        price: 18,
        availability: true,
        time: 4,
        players: 6,
        rating: 2.5
      },
      {
        name: "Carom",
        id: "022",
        price: 10,
        availability: false,
        time: 3,
        players: 3,
        rating: 3.5
      },
      {
        name: "Ludo",
        id: "023",
        price: 6,
        availability: true,
        time: 2,
        players: 4,
        rating: 2.5
      },
      {
        name: "Scribble",
        id: "024",
        price: 1,
        availability: false,
        time: 4,
        players: 2,
        rating: 4
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
