import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    SnackbarComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    MatIconModule
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    SnackbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
