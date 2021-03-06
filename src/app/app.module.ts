import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SquadComponent } from './components/squad/squad.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TeamComponent } from './components/team/team.component';
import { ModalComponent } from './components/modal/modal.component';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';
import { AuthGuard } from './services/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { RulesComponent } from './components/rules/rules.component';
import { Error404Component } from './components/error404/error404.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LineupComponent } from './components/lineup/lineup.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SquadComponent,
    LeaderboardComponent,
    CallbackComponent,
    ProfileComponent,
    TeamComponent,
    ModalComponent,
    RulesComponent,
    Error404Component,
    MaintenanceComponent,
    FixturesComponent,
    LineupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ApiService,
    CommonService,
    AuthService,
    AuthGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
