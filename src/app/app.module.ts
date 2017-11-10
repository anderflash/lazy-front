import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomReuseStrategy } from './custom-reuse.strategy';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { UserSelectorComponent, LocalComponent, StatusComponent, UserSearchComponent } from './view';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    StatusComponent,
    UserSelectorComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
