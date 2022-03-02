import { Component, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Users } from "../../models/users.model";
import { DataService } from "../../services/data.service";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
	editProfile = false;
	userId = -1;
	userDetails = new Users();

	editProfileForm: FormGroup;
	userImg = "./../../assets/user.jpg";
	mobileErrMsg = "You must enter a valid mobile number";
	emailErrMsg = "You must enter a valid Email ID";
	locationErrMsg = "You must enter the location";

	constructor(private dataService: DataService) {}

	ngOnInit() {
		// add necessary validators
		// username should be disabled. it should not be edited
		this.userId = this.dataService.userId;
		this.dataService.getUserDetails(this.userId).subscribe((response) => {
			this.userDetails = response;
			console.log(this.editProfileForm.get("userName"));
			this.editProfileForm.get("userName").setValue(this.userDetails.username);
		});

		this.editProfileForm = new FormGroup({
			userName: new FormControl({ value: this.userDetails.username }),
			mobile: new FormControl(""),
			email: new FormControl(""),
			location: new FormControl(""),
		});

		// get login status from service
		// get userId from service and assign it to userId property
		// get profile details and display it
	}

	changeMyProfile() {
		// if successfully changed the profile it should display new details hiding the form
		this.editProfile = false;
	}

	editMyProfile() {
		// change editProfile property value appropriately
		this.editProfile = true;
	}

	discardEdit() {
		// change editProfile property value appropriately
		this.editProfile = false;
	}

	getProfileDetails() {
		// retrieve user details from service using userId
	}
}
