import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  public regions = [];

  constructor(private _commonService: CommonserviceService) {
    //console.log(provinces);
   }

  ngOnInit() {
    this._commonService.getRegions()
      .subscribe(data => this.regions = data);
  }

}
