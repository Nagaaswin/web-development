import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError, Subject } from "rxjs";
import { Credentials } from "../models/credentials.model";
import { Users } from "../models/users.model";
import { Patient } from "../models/patient";
import { Appointment } from "../models/appointment";
import { ApiService } from "./api.service";
import { tap } from "rxjs/operators";

@Injectable()
export class DataService {
	isLoggedIn = false;
	isLogIn: BehaviorSubject<boolean>;
	userDetailsSubject = new Subject<Users>();
	userId: number;
	constructor(private api: ApiService) {
		this.isLogIn = new BehaviorSubject<boolean>(false);
	}

	authenticateUser(username: string, password: string): Observable<boolean> {
		this.api.checkLogin(username, password).subscribe((response) => {
			this.isLogIn.next(response.isLoggedIn);
			this.isLoggedIn = response.isLoggedIn;
			this.userId = response.userId;
		});

		// store 'userId' from response as key name 'userId' to the localstorage

		// return true if user authenticated

		// return false if user not authenticated

		return this.isLogIn;
	}

	getAuthStatus(): Observable<boolean> {
		// return this.isLogIn.asObservable();
		return;
	}
	doLogOut() {
		// remove the key 'userId' if exists
	}

	getUserDetails(userId: number): Observable<Users> {
		// should return user details retrieved from api service
		this.api.getUserDetails(userId).subscribe((response) => {
			this.userDetailsSubject.next(response);
		});

		return this.userDetailsSubject;
	}

	updateProfile(userDetails): Observable<boolean> {
		// should return the updated status according to the response from api service

		return;
	}

	registerPatient(patientDetails): Observable<any> {
		// should return response retrieved from ApiService

		// handle error

		return;
	}

	getAllPatientsList(): Observable<any> {
		// should return all patients list retrieved from ApiService

		// handle error

		return;
	}

	getParticularPatient(id): Observable<any> {
		// should return particular patient details retrieved from ApiService

		// handle error

		return;
	}

	getDiseasesList(): Observable<any> {
		// should return response retrieved from ApiService

		// handle error

		return;
	}

	bookAppointment(appointmentDetails): Observable<any> {
		// should return response retrieved from ApiService

		// handle error

		return;
	}

	getAppointments(patientId): Observable<any> {
		// should return response retrieved from ApiService

		// handle error

		return;
	}

	deleteAppointment(appointmentId): Observable<any> {
		// should return response retrieved from ApiService

		// handle error

		return;
	}

	requestedAppointments(): Observable<any> {
		// should return response retrieved from ApiService

		// handle error

		return;
	}

	getUserId(): number {
		// retrieve 'userId' from localstorage

		return;
	}
}
