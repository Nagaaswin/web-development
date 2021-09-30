import { Component, Input } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.onStatusChanged(this.id, status);
    // console.log("A server status changed, new status: " + status);
    // this.loggingService.logStatus(status);
    this.accountService.statusChanged.emit(status);
  }
}
