import { Component } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
