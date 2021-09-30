import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: "root",
})
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  statusChanged = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  onAccountAdded(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatus(status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatus(newStatus);
  }
}
