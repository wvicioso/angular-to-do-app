import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { ListMenuComponent } from './list-menu/list-menu.component'
import { ActiveListComponent } from './active-list/active-list.component';
import { NewListComponent } from './new-list/new-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewListComponent,
    HeaderComponent,
    FooterComponent,
    ActiveListComponent,
    ListMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// @NgModule({
//   imports: [
//     RouterModule.forRoot(
//       appRoutes,
//       { enableTracing: true } // <-- debugging purposes only
//     )
//     // other imports here
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
