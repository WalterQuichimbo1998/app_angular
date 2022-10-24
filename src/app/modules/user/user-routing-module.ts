import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { DefaultUserComponent } from './default-user/default-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    {path:'',component:UserListComponent,canActivate:[AuthGuard]},
    {path:'/user',component:DefaultUserComponent,canActivate:[AuthGuard]},
    {path:'detail/:id',component:UserDetailComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
