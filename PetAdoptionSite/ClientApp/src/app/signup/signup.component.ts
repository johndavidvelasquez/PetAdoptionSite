import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';
import { IProvinces, ICities } from 'src/app/model/location';

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

  constructor(private _commonService: CommonserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this._commonService.getProvinces()
    .subscribe(data => this.provinces = data);

    this._commonService.getCities()
    .subscribe(data => this.cities = data);

    this.createForm();

  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required]
    });
  }

  selectProvince(value:string) {
    this.citiesData = this.cities.filter(item => item.province === value);
    console.log(this.citiesData);
  }

}
