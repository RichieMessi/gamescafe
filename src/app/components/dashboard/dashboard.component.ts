import { Component, OnInit } from "@angular/core";

import { GameService } from "../../services/game.service";
import { Game } from "../../game";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  _listFilterByPlayers: number;
  _listFilterByTime: number;

  get listFilterByPlayers(): number {
    return this._listFilterByPlayers;
  }

  get listFilterByTime(): number {
    return this._listFilterByTime;
  }
  // set listFilter(value: number) {
  //   this._listFilter = value;
  //   this.filteredGames = this.listFilter
  //     ? this.performFilter(this.listFilter)
  //     : this.games;
  // }

  set listFilterByPlayers(value: number) {
    this._listFilterByPlayers = value;
    this.tempFilteredGames = this.listFilterByPlayers
      ? this.performFilterByPlayers(this._listFilterByPlayers)
      : this.filteredGames;
  }

  set listFilterByTime(value: number) {
    this._listFilterByTime = value;
    this.tempFilteredGames = this.listFilterByTime
      ? this.performFilterByTime(this._listFilterByTime)
      : this.filteredGames;
  }

  // set listFilterByPlayers(value: number) {
  //   this._listFilterByPlayers = value;
  //   this.filteredGames = this.performFilterByPlayers(this.listFilterByPlayers);
  // }

  // set listFilterByTime(value: number) {
  //   this._listFilterByTime = value;
  //   this.filteredGames = this.performFilterByTime(this.listFilterByTime);
  // }

  filteredGames: Game[];
  tempFilteredGames: Game[];
  games: Game[];
  constructor(private gameService: GameService) {}

  // ngOnInit() {
  //   this.games = this.gameService.getGames();
  //   this.filteredGames = this.games;
  //   console.warn(this.games);
  // }

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.filteredGames = this.games;
    this.tempFilteredGames = this.filteredGames;
    // this.tempFilteredGames = this.games;
    // this.filteredGames = this.tempFilteredGames;
  }

  performFilterByTime(filterBy: number) {
    return this.filteredGames.filter((game: Game) => filterBy <= game.time);
  }

  performFilterByPlayers(filterBy: number) {
    return this.filteredGames.filter((game: Game) => filterBy <= game.players);
  }
}
