import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  constructor() {}

  count: number=1;

  addCounter() {
    console.log(this.count++);
  }
}
