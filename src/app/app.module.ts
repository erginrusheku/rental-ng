import { Houses } from './houses/houses.model';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HousesComponent } from './houses/houses.component';
 const appRoutes: Routes = [

 {path: '', component: HomeComponent },
 { path: 'houses' , component: HousesComponent },
 ];
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
