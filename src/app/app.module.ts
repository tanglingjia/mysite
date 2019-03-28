import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy,LocationStrategy } from "@angular/common"

import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { LingjiaComponent } from './lingjia/lingjia.component';
import { GamesComponent } from './games/games.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TimestampComponent } from './utilities/timestamp/timestamp.component';
import { CompareComponent } from './utilities/compare/compare.component';
import { NumberComponent } from './utilities/number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilitiesComponent,
    LingjiaComponent,
    GamesComponent,
    TimestampComponent,
    CompareComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    MatButtonToggleModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
