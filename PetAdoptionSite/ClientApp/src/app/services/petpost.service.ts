import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPetPost} from '../model/petpost';
import { IPetType } from '../model/pettype';
import { IPetSubtype } from '../model/petsubtype';

@Injectable({
  providedIn: 'root'
})
export class PetpostService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPetPosts(): Observable<IPetPost[]> {
    return this.http.get<IPetPost[]>(this.baseUrl + 'api/PetPosts');
  }
  postPetPosts(newPetPosts) {
    return this.http.post(this.baseUrl + 'api/PetPosts', newPetPosts);
  }

  getPetTypes(): Observable<IPetType[]> {
    return this.http.get<IPetType[]>(this.baseUrl + 'api/PetTypes');
  }
  postPetTypes(newPetTypes) {
    return this.http.post(this.baseUrl + 'api/PetTypes', newPetTypes);
  }

  getPetSubtypes(): Observable<IPetSubtype[]> {
    return this.http.get<IPetSubtype[]>(this.baseUrl + 'api/PetSubTypes');
  }
  postPetSubtypes(newPetSubTypes) {
    return this.http.post(this.baseUrl + 'api/PetSubTypes', newPetSubTypes);
  }
  postPetImage(newPetImage) {
    return this.http.post(this.baseUrl + 'api/PetPostImages', newPetImage);
  }
}
