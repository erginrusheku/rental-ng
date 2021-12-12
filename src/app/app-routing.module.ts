import { HousesAddComponent } from './components/houses/houses-add/houses-add.component';
import { HousesListComponent } from './components/houses/houses-list/houses-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesViewComponent } from './components/houses/houses-view/houses-view.component';
import { HousesEditComponent } from './components/houses/houses-edit/houses-edit.component';


const routes: Routes = [
 {path: '', redirectTo: '/houses' , pathMatch: 'full'},
 {path: 'houses', component: HousesListComponent},
 {path: 'houses/add', component: HousesAddComponent},
 {path: 'houses/:id/view', component: HousesViewComponent},
 {path: 'houses/:id/edit', component: HousesEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
