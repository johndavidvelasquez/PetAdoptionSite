import { Component, OnInit } from '@angular/core';
import { PetpostService } from 'src/app/services/petpost.service'
import { IPetPost } from 'src/app/model/petpost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public petPosts: IPetPost[] = [];

  constructor(private petpostService: PetpostService) { }

  ngOnInit() {
    this.petpostService.getPetPosts().subscribe(result => {
      this.petPosts = result;
      console.log(result);
      console.log("sdf");
    }, error => {
      console.error(error);
    });

  }

}
