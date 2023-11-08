import { NavbarComponent } from './../navbar/navbar.component';
import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from './service/country.service';
import { Country } from '../core/models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  dataCountry: Country = new Country();

  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.getAllContrys();
  }

  getAllContrys() {
    this.service.GetCountryByCod().subscribe((data: any) => {

      this.dataCountry.data = data.slice(0, 10)

      this.filterRegions();
    });
  }

  filterRegions() {
    for (const country of this.dataCountry.data) {
      if (!this.dataCountry.region.includes(country.region)) {
        this.dataCountry.region.push(country.region);
      }
    }
    this.dataCountry.region.map((region) => {});
    this.dataCountry.data.map((country) => {});
  }
}
