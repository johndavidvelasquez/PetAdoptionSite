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

    this.createForm();

    this._commonService.getProvinces()
    .subscribe(data => this.provinces = data);

    this._commonService.getCities()
    .subscribe(data => this.cities = data);


  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'contactNumber': [null, Validators.required],
      'province': [null, Validators.required],
      'city': [null, Validators.required],
      'userName': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  selectProvince(value:string) {
    this.citiesData = this.cities.filter(item => item.province === value);
  }

  onSubmit(post) {
    // this.petpostService.postPetPosts(post).subscribe(result => {
    //   //Insert dialog boxes
    //   this.router.navigateByUrl('/');
    // }, error => console.error(error));
    console.log(post);

  }

}
