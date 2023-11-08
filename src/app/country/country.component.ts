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
    this.service.GetCountryByCod().subscribe((data) => {
      for (const pais of data) {

        if (!this.dataCountry.region.includes(pais.region)) {
          this.dataCountry.region.push(pais.region);
        }
      }
    });
  }
  
}
