import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input("srvElement") element: { type: String; name: String; content: String };
  constructor() {
    console.log("inside constructor");
  }
  ngDoCheck(): void {
    console.log("inside ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("inside ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("inside ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("inside ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("inside ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("inside ngOnDestroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("inside ngOnChanges");
  }

  ngOnInit(): void {
    console.log("inside ngOnIt");
  }
}
