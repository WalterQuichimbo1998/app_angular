import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { internal_paths } from '@data/constants/routes';
import { PermissionsEnum } from '@data/enum';
import { Page404Component } from '@modules/server/page404/page404.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    {path:'',component:UserListComponent,canActivate:[AuthGuard],data:{permission: PermissionsEnum.table_user}},
    {path:'/user',component:DefaultUserComponent,canActivate:[AuthGuard],data:{permission: PermissionsEnum.table_user}},
    {path:'detail/:id',component:UserDetailComponent,canActivate:[AuthGuard],data:{permission: PermissionsEnum.detail_user}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
