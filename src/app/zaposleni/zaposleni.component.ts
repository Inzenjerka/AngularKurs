import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalniService } from '../globalni.service';
import { ZaposlenikModel } from '../interfejsi/zaposlenik-model';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  sviZaposlenici : ZaposlenikModel[]=[];
  radnaMjesta : any;
  zaposleniciZaDisplej : ZaposlenikModel[]=[];
  terminPretrage : string='';
  //rx js --subscribe, pretplata na reyultat funcije koji ce se dobiti u buducnosti

  constructor(private globalni : GlobalniService, private router: Router) { }

  ngOnInit(): void {
    //this.sviZaposlenici = this.globalni.getZaposlenici();
    this.globalni.getZaposlenici().subscribe((rezultat:any)=>{
      this.sviZaposlenici=rezultat;
      this.zaposleniciZaDisplej = rezultat;
      this.radnaMjesta = [...new Set(this.sviZaposlenici.map((element:ZaposlenikModel)=>{return element.radnoMjesto;}))];
      console.log(this.radnaMjesta);
    });
  }

  FiltrirajZaposlene(mjesto:any){
    this.zaposleniciZaDisplej = this.sviZaposlenici.filter((zaposleni:ZaposlenikModel)=>zaposleni.radnoMjesto===mjesto);
      console.log(this.sviZaposlenici);
  }

  SviZaposlenici(){
    this.zaposleniciZaDisplej = this.sviZaposlenici;
  }

  Pretrazi() : void
  {
    this.zaposleniciZaDisplej=this.sviZaposlenici.filter((zaposlenik:any)=>
    zaposlenik.ime.toLowerCase().includes(this.terminPretrage.toLowerCase())
    ||zaposlenik.radnoMjesto.toLowerCase().includes(this.terminPretrage.toLocaleLowerCase()));

  }

  PonistiPretragu() : void
  {
    this.zaposleniciZaDisplej=this.sviZaposlenici;
  }

  NoviZaposleni():void{
    this.router.navigate(['/novizaposlenik']);
  }

  }

