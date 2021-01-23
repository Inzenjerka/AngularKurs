import { Component, OnInit } from '@angular/core';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {

  sveDrzave:any;
  terminZaPretragu ='';

  constructor(private api : GlobalniService) { 
      this.api.getDrzave().subscribe((result)=>{
        this.sveDrzave = result;
        console.log(this.sveDrzave);
      }//, error => console.log('Greska');
      )
  }

  ngOnInit(): void {
  }

  Pretrazi() : void
  {
    this.api.pretraziDrzave(this.terminZaPretragu).subscribe((rezultat:any)=>
    this.sveDrzave=rezultat);
  }

}
