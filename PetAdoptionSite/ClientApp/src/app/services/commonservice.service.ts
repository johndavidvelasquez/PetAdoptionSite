import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICities, IProvinces, IRegion } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http: HttpClient) { }

  getRegions(): Observable<IRegion[]> 
    {
      return this.http.get<IRegion[]>("/assets/location/regions.json");
    }
  getProvinces(): Observable<IProvinces[]> 
    {
      return this.http.get<IProvinces[]>("/assets/location/provinces.json");
    }
  getCities(): Observable<ICities[]> 
    {
      return this.http.get<ICities[]>("/assets/location/cities.json");
    }
}
