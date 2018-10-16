import { Component, OnInit } from "@angular/core";

import { Chart } from "chart.js";
import { GameService } from "../../services/game.service";
import { Game } from "../../game";

@Component({
  selector: "app-line-graph",
  templateUrl: "./line-graph.component.html",
  styleUrls: ["./line-graph.component.css"]
})
export class LineGraphComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  // chartLabels = ["January", "February", "Mars", "April"];

  // onChartClick(event) {
  //   console.log(event);
  // }

  myColors = [
    {
      backgroundColor: "rgba(103, 58, 183, .1)",
      borderColor: "rgb(103, 58, 183)",
      pointBackgroundColor: "rgb(103, 58, 183)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(103, 58, 183, .8)"
    }
  ];

  LineChart: any[] = [];
  games: Game[] = [];
  players: number[] = [];
  ratings: number[] = [];
  time: number[] = [];
  names: string[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.games.map((game: Game) => this.names.push(game.name));
    this.gameService
      .getGames()
      .map((game: Game) => this.players.push(game.players));
    this.gameService
      .getGames()
      .map((game: Game) => this.ratings.push(game.rating));
    this.gameService.getGames().map((game: Game) => this.time.push(game.time));
    console.warn(this.players);

    this.LineChart = new Chart("lineChart", {
      type: "line",
      data: {
        labels: this.names,
        datasets: [
          {
            data: this.time,
            borderColor: "#ccc",
            backgroundColor: "pink",
            fill: true
          },
          {
            data: this.ratings,
            backgroundColor: "darkcyan",
            fill: true
          },
          {
            label: "Cost",
            data: this.players,
            backgroundColor: "cornflowerblue",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          text: "Line Chart",
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              ticks: {
                beginsAtZero: true
              }
            }
          ]
        }
      }
    });

    this.LineChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: this.names,
        datasets: [
          {
            data: this.time,
            borderColor: "#ccc",
            backgroundColor: "pink",
            fill: true
          },
          {
            data: this.ratings,
            backgroundColor: "darkcyan",
            fill: true
          },
          {
            label: "Cost",
            data: this.players,
            backgroundColor: "cornflowerblue",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          text: "Bar Chart",
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              ticks: {
                beginsAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
