import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { LeftNavMenuComponent } from './layout/left-nav/left-nav-menu/left-nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Page404Component } from './modules/server/page404/page404.component';
import { Page403Component } from './modules/server/page403/page403.component';
import { Page401Component } from './modules/server/page401/page401.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    LeftNavComponent,
    LeftNavMenuComponent,
    Page404Component,
    Page403Component,
    Page401Component,
  ],
  imports: [
    BrowserModule,
    // Core
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
