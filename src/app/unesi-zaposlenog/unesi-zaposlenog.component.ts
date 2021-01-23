import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalniService } from '../globalni.service';
import { ZaposlenikModel } from '../interfejsi/zaposlenik-model';

@Component({
  selector: 'app-unesi-zaposlenog',
  templateUrl: './unesi-zaposlenog.component.html',
  styleUrls: ['./unesi-zaposlenog.component.css']
})
export class UnesiZaposlenogComponent implements OnInit {

  zaposlenik : FormGroup = new FormGroup({});

  constructor(private api : GlobalniService) { }

  ngOnInit(){
    this.zaposlenik = new FormGroup({
      ime : new FormControl('', Validators.required),
      starost: new FormControl(0),
      radnoMjesto: new FormControl('')
    });
  }

  onSubmit(noviZaposlenik: FormGroup)
  {
    console.log(noviZaposlenik);
    this.api.postZaposlenik(noviZaposlenik.value).subscribe((rezultat)=>{
      console.log(rezultat);
    });
  }

}
