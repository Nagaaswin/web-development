import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private subjectSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subjectSub = this.userService.activatedSubject.subscribe((data) => {
      this.userActivated = data;
    });
  }

  ngOnDestroy(): void {
    this.subjectSub.unsubscribe();
  }
}
