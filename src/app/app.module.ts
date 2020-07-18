import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstgetComponent } from './gstget/gstget.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstAddComponent } from './gst-add/gst-add.component';

@NgModule({
  declarations: [
    AppComponent,
    GstgetComponent,
    GstEditComponent,
    GstAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
