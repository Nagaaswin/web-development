import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { promise } from "protractor";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signUpForm: FormGroup;
  forbiddenUserNames = ["naga", "Aswin"];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        userName: new FormControl(null, [
          Validators.required,
          this.forbiddenNamesValidation.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenMailAddress
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
  }

  get controls() {
    return (<FormArray>this.signUpForm.get("hobbies")).controls;
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get("hobbies")).push(control);
  }

  forbiddenNamesValidation(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { isForbiddenUser: true };
    }
  }

  forbiddenMailAddress(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "rsutrans@gmail.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
