import { Component } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';
import { PetpostService } from '../services/petpost.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { IPetPost } from 'src/app/model/petpost';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent{

  public regions = [];
  public pets: IPetPost[];

  constructor(private _petsService: PetpostService) {}

   ngOnInit() {

    this._petsService.getPetPosts().subscribe(result => {
      this.pets = result;
      console.log(this.pets);
    });
  }

}
