import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalComponent } from './view';

const routes: Routes = [
  { path: '', redirectTo: 'local', pathMatch: 'full' },
  {
    path: 'local', component: LocalComponent,
    data: { key: 'local' }
  },
  {
    path: 'adquirencia', loadChildren: './spa-fntmod-adquirencia/spa-fntmod-adquirencia.module#SpaFntmodAdquirenciaModule',
    data: { key: 'adquirencia' }
  },
  {
    path: 'cartoes', loadChildren: './spa-fntmod-cartoes/spa-fntmod-cartoes.module#SpaFntmodCartoesModule',
    data: { key: 'cartoes' }
  },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
