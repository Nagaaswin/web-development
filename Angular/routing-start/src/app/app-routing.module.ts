import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },
  {
    path: "servers",
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      { path: ":id", component: ServerComponent },
    ],
  },
  // {
  //   path: "not-found",
  //   component: PageNotFoundComponent,
  // },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found" },
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
