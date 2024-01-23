import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { SuccessComponent } from '../success/success.component';
import { InputRestrictionDirective } from 'src/app/core/directives/input-restriction-directive';
import { CustomDirectiveModule } from 'src/app/custom-directive.module';

@NgModule({
  declarations: [ContactComponent, SuccessComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    CustomDirectiveModule
  ]
})
export class ContactModule { }
