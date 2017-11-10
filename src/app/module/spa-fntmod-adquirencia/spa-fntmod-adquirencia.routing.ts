import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcquiringComponent } from './view';

const routes: Routes = [
  { path: '', component: AcquiringComponent },
  { path: 'cancelamento', component: AcquiringComponent }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
