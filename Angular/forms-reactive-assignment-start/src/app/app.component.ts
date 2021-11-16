import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.nameValidationAsync
      ),
      mail: new FormControl(null, [Validators.email, Validators.required]),
      projectStatus: new FormControl("Stable"),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  nameValidation(control: FormControl): { [s: string]: boolean } {
    if (control.value === "test") {
      return { NameIsValid: true };
    }
  }
  nameValidationAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test") {
          resolve({ NameIsValid: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
