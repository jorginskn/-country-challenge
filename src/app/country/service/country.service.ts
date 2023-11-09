import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  GetAllCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  GetCountryByCode(id: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/alpha?codes=${id}`);
  }

  getCountriesByRegion(region: string): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/region/' + region);
  }

  getCountriesByName(name: string): Observable<any> {
    return this.http.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=tru`
    );
  }
}
