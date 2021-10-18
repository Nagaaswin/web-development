import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  private obsSub: Subscription;

  ngOnInit() {
    /* rxjs interval observable*/
    // this.obsSub = interval(1000).subscribe((count) => {
    //   console.log(count++);
    // });

    const firstCustObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Counter is greater than 3"));
        }
      }, 1000);
    });
    this.obsSub = firstCustObs
      .pipe(
        filter((data) => {
          return data > 0;
        })
      )
      .subscribe(
        (count) => {
          console.log(count++);
        },
        (error: Error) => {
          console.error(error);
          alert(error.message);
        },
        () => {
          console.log("Method is completed");
        }
      );
  }
  ngOnDestroy(): void {
    this.obsSub.unsubscribe();
  }
}
