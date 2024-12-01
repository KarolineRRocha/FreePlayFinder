import { Component } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { Lists } from "../../models/lists";
import { Profile } from "../../models/profile";
import { GameService } from "../../services/game.service";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.scss",
})
export class NavComponent {
  list: Lists = {
    id: "",
    name: "",
    gamesIds: Array<string>(),
  };

  profile: Profile = {
    id: "",
    name: "",
    email: "",
    password: "",
    avatar: "",
    lists: Array<Lists>(),
  };
  imageSource?: String = "";

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getProfiles().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (erro) => {
        console.error("Algo deu errado:", erro);
      },
    });
  }
}
