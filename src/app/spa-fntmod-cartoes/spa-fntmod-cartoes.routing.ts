import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent, CardCancellationComponent } from './view';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'cancelamento', component: CardCancellationComponent }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
