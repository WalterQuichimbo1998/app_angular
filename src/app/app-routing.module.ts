import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { internal_paths } from '@data/constants/routes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component'; 
import { Page401Component } from '@modules/server/page401/page401.component';
import { Page404Component } from '@modules/server/page404/page404.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/login',
    pathMatch:'full'
  },
  {path:internal_paths.server_e_404, component:Page404Component},
  {path:internal_paths.server_e_401, component:Page401Component},
  {
    path:'auth',
    loadChildren: () =>
          import('@modules/auth/auth.module').then( (m) => m.AuthMdodule)
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'user', 
        loadChildren: () =>
          import('@modules/user/user.module').then( (m) => m.UserModule)
      },
    
    ],
  },
  {
    path:'**',
    redirectTo:'/auth/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
