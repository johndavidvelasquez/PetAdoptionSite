import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegion } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http: HttpClient) { }

  getRegions(): Observable<IRegion[]> 
    {
      return this.http.get<IRegion[]>("/assets/location/regions.json");
    }
}
