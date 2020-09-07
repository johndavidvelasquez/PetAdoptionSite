import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPetPost} from '../model/petpost';

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
}
