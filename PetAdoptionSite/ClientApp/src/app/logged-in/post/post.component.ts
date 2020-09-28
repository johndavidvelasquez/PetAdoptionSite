import { Component, OnInit } from '@angular/core';
import { PetpostService } from 'src/app/services/petpost.service'
import { IPetPost } from 'src/app/model/petpost';
import { IPetType } from 'src/app/model/pettype';
import { IPetSubtype } from 'src/app/model/petsubtype';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/services/commonservice.service';
//import { MatFileUploadModule } from 'angular-material-fileupload';

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
  public title = "Add pet for Adoption";
  petFormGroup: FormGroup;
  locationFormGroup: FormGroup;
  imageFormGroup: FormGroup;
  postData = [];

  constructor(private petpostService: PetpostService, private formBuilder: FormBuilder, private router: Router, private _commonService: CommonserviceService) { }

  provinces = [];
  cities = [];
  citiesData = [];
  url;
  private base64textString:String="";

  ngOnInit() {


    this.petpostService.getPetPosts().subscribe(result => {
      this.petPosts = result;                  
    });

    this.petpostService.getPetTypes().subscribe(result => {
      this.petTypes = result;                  
    });

    this.petpostService.getPetSubtypes().subscribe(result => {
      this.petSubtypes = result;                  
    });

    

    this.petFormGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'petTypeId': [null, Validators.required],
      'petSubTypeId': [null],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]]
    });

    this.locationFormGroup = this.formBuilder.group({
      'cityName': [null, Validators.required],
      'provinceKey': [null, Validators.required]
    });

    this.imageFormGroup = this.formBuilder.group({
      'imageUrl': ['', Validators.required]
    });

    this._commonService.getProvinces()
    .subscribe(data => this.provinces = data);

    this._commonService.getCities()
    .subscribe(data => this.cities = data);
    

  }

  mapForms(petInfo, petLoc)
  {
    this.postData = { ...petInfo, ...petLoc};
    console.log(this.postData);
  }


  selectOption(value:number) {
    this.subTypedata = this.petSubtypes.filter(item => item.petTypeId === value);
    console.log(this.subTypedata);
  }

  onSubmit(post) {
    this.petpostService.postPetPosts(post).subscribe(result => {
      //Insert dialog boxes
      this.postImageToDB(this.base64textString,result.id);
      this.router.navigateByUrl('/');
    }, error => console.error(error));
  }

  selectProvince(value:string) {
    this.citiesData = this.cities.filter(item => item.province === value);
  }

  
  onSelectFileMain(event) {
    var files = event.target.files;
    var file = files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
      
    }
  }

  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }



  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
    console.log(this.base64textString);
    //this.postImageToDB(this.base64textString, 99);
  }

  postImageToDB(base64data, newPostId) {
    var newImage = {
        postId: newPostId,
        img: base64data,
        isMain: true
    };

    console.log(newImage);

    this.petpostService.postPetImage(newImage).subscribe(result => {
    }, error => console.error(error));

  }

}
