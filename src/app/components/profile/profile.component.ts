import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { GameService } from "../../services/game.service";
import { Game } from "../../game";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id: string;
  games: Game[];

  constructor(private route: ActivatedRoute, private gameService: GameService) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.warn(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.getIndividualGame();
  }

  getIndividualGame() {
    this.games = this.games.filter((game: Game) => this.id == game.id);
    console.warn(this.games);
  }
}
