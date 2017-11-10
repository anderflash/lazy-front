import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './spa-fntmod-cartoes.routing';
import { CardComponent, CardCancellationComponent } from './view';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [CardComponent, CardCancellationComponent]
})
export class SpaFntmodCartoesModule { }
