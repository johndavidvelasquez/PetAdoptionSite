import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { IUser } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  Users : IUser[];

  constructor(private userService: UserService, private dialog: MatDialogRef<LoginComponent>, private formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.LoginForm = this.formBuilder.group({
      'Email': [null, Validators.required],
      'Password': [null, [Validators.required]]
    });

   
  }

  onSubmit(post) {
    
  }
  

}

