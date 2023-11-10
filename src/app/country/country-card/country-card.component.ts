import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/core/models/country.model';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent implements OnInit {
  @Input() dataCountry: any;
  mostrarItens: boolean = true;
  constructor(private router: Router, private service: CountryService) {}
  ngOnInit(): void {}

  handleEvent(id: string) {
    this.router.navigate(['country/' + id]);
  }

}
