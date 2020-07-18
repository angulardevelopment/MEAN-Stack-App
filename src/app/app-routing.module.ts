import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstgetComponent } from './gstget/gstget.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstAddComponent } from './gst-add/gst-add.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
