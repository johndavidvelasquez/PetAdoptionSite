import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';
import { PetpostService } from '../services/petpost.service';
import { IPetPost } from '../model/petpost';
import { IPetSubtype } from '../model/petsubtype';
import { IPetType } from '../model/pettype';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  pettypes = new FormControl();
  petsubtypes = new FormControl();
  location = new FormControl();
  public title = "Find a Pet";
  public regions = [];
  public filters: IPetType[];
  public pets: IPetPost[];
  public petSubTypes: IPetSubtype[];
  public petTypes: IPetType[];


  constructor(private _commonService: CommonserviceService, private _petsService: PetpostService) {
    //console.log(provinces);
   }

  ngOnInit() {
    this._commonService.getRegions()
      .subscribe(data => this.regions = data);

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
    
  

  }

}
