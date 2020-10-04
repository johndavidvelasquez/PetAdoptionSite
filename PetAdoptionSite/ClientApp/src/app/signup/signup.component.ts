import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';
import { IProvinces, ICities } from 'src/app/model/location';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup: FormGroup;
  provinces = [];
  cities = [];
  citiesData = [];
  public title = "Sign Up";
  postData =[];


  constructor(private _commonService: CommonserviceService, private formBuilder: FormBuilder, private usersService : UserService) { }

  ngOnInit() {

    this.createForm();

    this._commonService.getProvinces()
    .subscribe(data => this.provinces = data);

    this._commonService.getCities()
    .subscribe(data => this.cities = data);


  }

  mapUser(post)
  {
    var location = { 'Location' : ''+post.city+', '+post.province  };
    this.postData= {...post, ...location}
    console.log(this.postData);
  }


  createForm() {
    this.formGroup = this.formBuilder.group({
      'Firstname': [null, Validators.required],
      'Lastname': [null, Validators.required],
      'MobileNumber': [null, Validators.required],
      'province': [null, Validators.required],
      'city': [null, Validators.required],
      'Email': [null, [Validators.required, Validators.email]],
      'Password': [null, Validators.required]
    });
  }

  selectProvince(value:string) {
    this.citiesData = this.cities.filter(item => item.province === value);
  }

  onSubmit(post) {
    this.usersService.postUsers(post).subscribe();
  }

}
