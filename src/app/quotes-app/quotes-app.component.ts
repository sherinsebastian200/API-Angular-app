import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotes-app',
  templateUrl: './quotes-app.component.html',
  styleUrls: ['./quotes-app.component.css']
})
export class QuotesAppComponent {

  constructor(private api:ApiService){
    api.fetchQuote().subscribe(
      (response)=>
      {
        this.quote = response
      }

    )
  }

  quote:any={}

}
