import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  // newServerName: string = ""; //two way binding
  // newServerContent: string = "";
  @ViewChild("serverContent") newServerContetInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      // serverContent: serverContent.value,
      serverContent: this.newServerContetInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverName.value,
      // blueprintContent: serverContent.value,
      blueprintContent: this.newServerContetInput.nativeElement.value,
    });
  }
}
