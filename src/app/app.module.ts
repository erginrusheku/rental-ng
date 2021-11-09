import { RentalComponent } from './rental/rental-component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

 const appRoutes: Routes = [

 {path: 'home', component: HomeComponent },
 { path: 'houses' , component: RentalComponent },
 ];
@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
