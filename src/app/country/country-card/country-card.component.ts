import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent implements OnInit {
  @Input() dataCountry: any;

  ngOnInit(): void {
    this.getNameCountry();
  }

  getNameCountry() {

    if (
      this.dataCountry.data &&
      Array.isArray(this.dataCountry.data) &&
      this.dataCountry.data.length >= 249
    ) {
      this.dataCountry.data = this.dataCountry.data.slice(0, 249);
    }
  }
}
