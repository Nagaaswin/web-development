import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("formData") formData: NgForm;
  answer = "";
  genders = ["male", "female"];
  user = {
    userName: "",
    email: "",
    secertQuestion: "",
    Answer: "",
    gender: "",
  };
  formSubmitted = false;
  suggestUserName() {
    const suggestedName = "Superuser";
    this.formData.setValue({
      userObject: {
        Username: suggestedName,
        email: "nagaaswin775@live.com",
      },
    });
  }

  // onSubmit(formData: NgForm) {
  //   console.log(formData);
  // }

  onSubmit() {
    this.formSubmitted = true;
    this.user.userName = this.formData.value.userObject.Username;
    this.user.email = this.formData.value.userObject.email;
    this.user.secertQuestion = this.formData.value.secret;
    this.user.Answer = this.formData.value.answer;
    this.user.gender = this.formData.value.gender;
    this.formData.reset();
  }
}
