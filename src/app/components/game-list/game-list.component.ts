import { Component, OnInit } from "@angular/core";

import { GameService } from "../../services/game.service";
import { Game } from "../../game";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.css"]
})
export class GameListComponent implements OnInit {
  available = false;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredGames = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.games;
  }

  filteredGames: Game[];
  games: Game[];
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.filteredGames = this.games;
    console.warn(this.games);

    if (this.available) {
      this.showOnlyAvailable();
    } else {
      this.filteredGames = this.games;
    }
  }

  performFilter(filterBy: string): Game[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.games.filter(
      (game: Game) => game.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleAvailability(): void {
    this.available = !this.available;
    // console.warn(this.available);
    if (this.available) {
      this.showOnlyAvailable();
    } else {
      this.filteredGames = this.games;
    }
  }

  showOnlyAvailable(): Game[] {
    return (this.filteredGames = this.filteredGames.filter(
      g => g.availability == true
    ));
  }
}
