import { Component } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {
    this.accountService.statusChanged.subscribe((status) =>
      alert("statuts is " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountService.onAccountAdded(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.logStatus(accountStatus);
  }
}
