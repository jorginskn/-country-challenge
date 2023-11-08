import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.model';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css'],
})
export class CountryFilterComponent implements OnInit {
  @Input() dataCountry: any;

  ngOnInit(): void {}
}
