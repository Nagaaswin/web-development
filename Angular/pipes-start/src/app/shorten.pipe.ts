import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return value.substr(0, 10);
  }
}
