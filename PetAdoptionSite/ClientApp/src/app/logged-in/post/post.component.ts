import { Component, OnInit } from '@angular/core';
import { PetpostService } from 'src/app/services/petpost.service'
import { IPetPost } from 'src/app/model/petpost';
import { IPetType } from 'src/app/model/pettype';
import { IPetSubtype } from 'src/app/model/petsubtype';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public petPosts: IPetPost[] = [];
  public petTypes: IPetType[] = [];
  public petSubtypes: IPetSubtype[] = [];

  constructor(private petpostService: PetpostService) { }

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

  }

  selectOption(id: number) {

  }

}
