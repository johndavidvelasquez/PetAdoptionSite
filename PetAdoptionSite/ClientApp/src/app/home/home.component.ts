import { Component, Output, EventEmitter} from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';
import { PetpostService } from '../services/petpost.service';
import { IPetPost, IPetPostImage} from 'src/app/model/petpost';
import { IPetSubtype } from '../model/petsubtype';
import { IPetType } from '../model/pettype';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})

export class HomeComponent{

  public title = "Home";
  public regions = [];
  public pets: IPetPost[];
  public petSubTypes: IPetSubtype[];
  public petTypes: IPetType[];
  public petImages: IPetPostImage[];

  panelOpenState = false;
  constructor(private _petsService: PetpostService, private router: Router ) {}

  ngOnInit() {
    this._petsService.getPetPosts().subscribe(result => {
      this.pets = result;
      console.log(this.pets);
    });

    this._petsService.getPetSubtypes().subscribe(result => {
      this.petSubTypes = result;
      console.log(this.petSubTypes);
    });

    this._petsService.getPetTypes().subscribe(result => {
      this.petTypes = result;
      console.log(this.petSubTypes);
    });

    this._petsService.getPetImages().subscribe(result => {
      this.petImages = result;                  
    });

  }

  onPetSelect(petId)
  {
    this.router.navigate(['/view', petId]);
    console.log(petId);
  }
  
  

}
