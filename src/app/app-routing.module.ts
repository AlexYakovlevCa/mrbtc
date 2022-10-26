import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: 'contact/:_id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'edit/:_id', component: ContactEditComponent },
  { path: 'edit', component: ContactEditComponent },
  { path: 'chart', component: ChartPageComponent },
  { path: '', component: HomepageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
