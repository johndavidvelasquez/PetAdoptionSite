import { Component, OnInit } from '@angular/core';
import { PetpostService } from 'src/app/services/petpost.service'
import { IPetPost } from 'src/app/model/petpost';
import { IPetType } from 'src/app/model/pettype';
import { IPetSubtype } from 'src/app/model/petsubtype';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  petPosts: IPetPost[] = [];
  petTypes: IPetType[] = [];
  petSubtypes: IPetSubtype[] = [];
  subTypedata: IPetSubtype[] = [];
  public title = "Add pet for Adoption"

  formGroup: FormGroup;

  constructor(private petpostService: PetpostService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.createForm();

    this.petpostService.getPetPosts().subscribe(result => {
      this.petPosts = result;                  
    });

    this.petpostService.getPetTypes().subscribe(result => {
      this.petTypes = result;                  
    });

    this.petpostService.getPetSubtypes().subscribe(result => {
      this.petSubtypes = result;                  
    });

    // this.petPostForm = this.formBuilder.group({
    //   fullName: [''],  
    //   email: [''],
    //   message: ['']
    // });

  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      //'name': [null, Validators.required],
      'petTypeId': [null, Validators.required],
      'petSubTypeId': [null],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
  }

  selectOption(value:number) {
    this.subTypedata = this.petSubtypes.filter(item => item.petTypeId === value);
    console.log(this.subTypedata);
  }

  onSubmit(post) {
    this.petpostService.postPetPosts(post).subscribe(result => {
      //Insert dialog boxes
      this.router.navigateByUrl('/');
    }, error => console.error(error));
  }

}
