import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TrafficLightComponent} from './traffic-light/traffic-light.component';
import {NgxsModule} from '@ngxs/store';
import {trafficLightState} from './traffic-light/stores/traffic-light.state';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {OverlayContainer} from '@angular/cdk/overlay';
import {AppOverlayContainer} from './custom-overlay-container';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([trafficLightState]),
    MatSnackBarModule
  ],
  providers: [{provide: OverlayContainer, useClass: AppOverlayContainer},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
