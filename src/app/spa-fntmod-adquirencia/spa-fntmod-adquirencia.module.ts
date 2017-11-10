import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './spa-fntmod-adquirencia.routing';
import { AcquiringComponent } from './view';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AcquiringComponent]
})
export class SpaFntmodAdquirenciaModule { }
