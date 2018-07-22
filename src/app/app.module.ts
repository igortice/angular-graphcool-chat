import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
