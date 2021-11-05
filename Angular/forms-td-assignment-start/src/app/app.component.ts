import { Component, ViewChild } from "@angular/core";
import { Form, NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("formData") formData: NgForm;

  onSubmit() {
    console.log(this.formData.value);
  }
}
