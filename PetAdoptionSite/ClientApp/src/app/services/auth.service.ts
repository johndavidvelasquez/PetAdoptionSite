import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,
              private userService: UserService, 
              @Inject('BASE_URL') private baseUrl: string) {}




}
