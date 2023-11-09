import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css'],
})
export class CountryDataComponent implements OnInit {
  @Input() dataCountry: any;
  id: any;
  mostrarItens: boolean = true
  constructor(private service: CountryService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getParamId();
  }
  getParamId() {
    this.route.paramMap.subscribe((params) => {
      let paramId = params.get('id');
      this.id = paramId;
      this.getCountriesById();
    });
  }

  getCountriesById() {
    this.service.GetCountryByCode(this.id).subscribe((data) => {
      this.dataCountry = data;
      console.log(data.name)
    });
  }

}
