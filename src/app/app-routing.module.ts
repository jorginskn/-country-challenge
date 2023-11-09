import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDataComponent } from './country/country-card/country-data/country-data.component';
import { CountryComponent } from './country/country.component';
import { CountryFilterComponent } from './country/country-filter/country-filter.component';
import { CountryCardComponent } from './country/country-card/country-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CountryComponent },
  { path: 'country/:id', component: CountryDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
