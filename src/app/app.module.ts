import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { AboutComponent } from "./components/about/about.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes = [
  { path: "", component: HomepageComponent },
  { path: "games", component: GameListComponent },
  { path: "about", component: AboutComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "dashboard/profile/:id", component: ProfileComponent },
  { path: "games/profile/:id", component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    GameListComponent,
    AboutComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
