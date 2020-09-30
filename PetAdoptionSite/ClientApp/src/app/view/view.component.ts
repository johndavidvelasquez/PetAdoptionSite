import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetpostService } from '../services/petpost.service';
import { IPetPost, IPetPostImage} from 'src/app/model/petpost';
import { IPetSubtype } from '../model/petsubtype';
import { IPetType } from '../model/pettype';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  title = "view";
  public petId;
  public pets: IPetPost[];
  public petSubTypes: IPetSubtype[];
  public petTypes: IPetType[];
  public petImages: IPetPostImage[];

  constructor(private route: ActivatedRoute,private _petsService: PetpostService,) { }

  ngOnInit() {
    this.petId = parseInt(this.route.snapshot.paramMap.get('id'));

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

}
