import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactPageComponent,
    AppHeaderComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    ChartPageComponent,
    ChartComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
