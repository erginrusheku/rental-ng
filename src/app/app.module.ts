import { HousesAddComponent } from './components/houses/houses-add/houses-add.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesEditComponent } from './components/houses/houses-edit/houses-edit.component';
import { HousesListComponent } from './components/houses/houses-list/houses-list.component';
import { HousesViewComponent } from './components/houses/houses-view/houses-view.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesListComponent,
    HousesAddComponent,
    HousesViewComponent,
    HousesEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
