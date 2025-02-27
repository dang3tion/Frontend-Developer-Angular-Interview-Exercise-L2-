import {  RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { NgModule } from '@angular/core';

// Standard Client-Side Routes
export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact-detail/:id', component: ContactDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}