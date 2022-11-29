import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-us-data',
  templateUrl: './us-data.component.html',
  styleUrls: ['./us-data.component.css']
})
export class UsDataComponent {
  constructor(private api:ApiService){
    api.fetchUsdata().subscribe(
      (response)=>
      {
        this.usdata = response
      }

    )
  }
  usdata:any={}


}
