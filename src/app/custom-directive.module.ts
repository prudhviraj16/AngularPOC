import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRestrictionDirective } from 'src/app/core/directives/input-restriction-directive';

@NgModule({
  declarations: [InputRestrictionDirective],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [InputRestrictionDirective],
})

export class CustomDirectiveModule { }
