import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssignmentWarningAlertComponent } from './assignment-warning-alert/assignment-warning-alert.component';
import { AssignmentSuccessAlertComponent } from './assignment-success-alert/assignment-success-alert.component';
import { FormsModule } from '@angular/forms';
import { AssignmentBindingComponent } from './assignment-binding/assignment-binding.component';
import { AssignmentPraticingDirectivesComponent } from './assignment-praticing-directives/assignment-praticing-directives.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentWarningAlertComponent,
    AssignmentSuccessAlertComponent,
    AssignmentBindingComponent,
    AssignmentPraticingDirectivesComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
