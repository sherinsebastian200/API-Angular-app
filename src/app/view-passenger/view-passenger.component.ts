import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-passenger',
  templateUrl: './view-passenger.component.html',
  styleUrls: ['./view-passenger.component.css']
})
export class ViewPassengerComponent {
  constructor(private api:ApiService){
    api.fetchPassenger().subscribe(
      (response)=>
      {
        this.view = response
      }

    )
  }

  view:any={}



}
