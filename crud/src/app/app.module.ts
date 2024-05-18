import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppComponent } from './app.component';

@NgModule({
 declarations: [AppComponent],
 imports: [
  BrowserModule,
  NgxMaskDirective,
  ReactiveFormsModule,
 ],
 providers: [provideNgxMask()],
 bootstrap: [AppComponent],
})
export class AppModule {}