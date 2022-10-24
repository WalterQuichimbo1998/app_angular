import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { NoAuthGuard } from "@core/guards/no-auth.guard";
import { internal_paths } from "@data/constants/routes";
import { LoginComponent } from "./login/login.component";

const routes:Routes=[
{
    path:internal_paths.auth_login,
    component:LoginComponent,
    canActivate:[NoAuthGuard] 
}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
 export class AuthRoutingMdodule{}