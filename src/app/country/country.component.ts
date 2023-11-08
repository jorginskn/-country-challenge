import { Component, OnInit } from '@angular/core';
import { CountryService } from './service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  constructor(private service: CountryService) {


  }
  ngOnInit(): void {
    this.getAllContrys()
  }

  getAllContrys() {
    this.service.GetCountryByCod().subscribe((data) => {
      console.log(data)
    })
  }
}
