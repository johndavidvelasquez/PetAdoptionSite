import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getUsers(): Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.baseUrl + 'api/Users');
  }

  postUsers(newUser) {
    return this.http.post(this.baseUrl + 'api/Users', newUser);
  }


  
}
