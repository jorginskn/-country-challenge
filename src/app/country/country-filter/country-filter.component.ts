import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';
import { Country } from 'src/app/core/models/country.model';
import { CountryService } from '../service/country.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

FormBuilder;

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css'],
})
export class CountryFilterComponent implements OnInit {
  @Input() dataCountry: any;
  digitizedValue: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private service: CountryService,
    private snackBar: MatSnackBar
  ) {}

  regionOrCountryLocation = this.formBuilder.group({
    region: '',
    countryName: '',
  });

  ngOnInit(): void {}

  getCountrySelectRegion(state: string) {
    this.regionOrCountryLocation.get('region')?.setValue(state);
    this.service.getCountriesByRegion(state).subscribe((data) => {
      if (data.length > 0) {
        this.dataCountry.data = data;
        this.dataCountry.data.splice(0, 15);
      } else {
        let message = 'Erro ao encontrar os dados do país';
        this.snackBar.open(message, 'Fechar', {
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
      }
    });
  }

  getDigitizedValue(event: any) {
    this.digitizedValue = event.target.value;
    this.service.getCountriesByName(this.digitizedValue).subscribe((data) => {
      if (data.length > 0) {
        this.dataCountry.data = data;
        this.dataCountry.splice(0, 15);
      } else {
        let message = 'Erro ao encontrar os dados do país';
        this.snackBar.open(message, 'Fechar', {
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
      }
    });
  }
}
