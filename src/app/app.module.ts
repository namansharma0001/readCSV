import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component'
import { SettledComponent } from './settled/settled.component'
import { UnsettledComponent } from './unsettled/unsettled.component'
import { DataService } from './data.service'

const appRoutes: Routes = [
  {
    path: 'settled',
    component: SettledComponent,
  },
  {
    path: 'unsettled',
    component: UnsettledComponent,
  },
];

@NgModule({
  providers: [
    DataService
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SettledComponent,
    UnsettledComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
