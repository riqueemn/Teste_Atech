import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
})
export class PessoasModule { }
