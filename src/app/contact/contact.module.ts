import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    RouterModule,
    QuicklinkModule
  ]
})
export class ContactModule { }
