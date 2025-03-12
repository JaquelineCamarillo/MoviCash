import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
