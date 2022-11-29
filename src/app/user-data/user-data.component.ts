import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  constructor(private api:ApiService){
    api.fetchUserdata().subscribe(
      (response)=>
      {
        this.userdata = response
      }

    )
  }
  userdata:any={}

}
