import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-transakcije',
  templateUrl: './transakcije.component.html',
  styleUrls: ['./transakcije.component.css']
})
export class TransakcijeComponent implements OnInit {

  sveTransakcije : any;
  vrsteTransakcija : any;
  filtriraneTransakcije : any;
  ukupno : any;

  constructor(private api : GlobalniService, private router: Router) { }

  ngOnInit(): void {
    this.api.getTransakcije().subscribe((rezultati)=>{
      this.sveTransakcije = rezultati;
      this.filtriraneTransakcije = rezultati;
      console.log(this.sveTransakcije);
      this.vrsteTransakcija =[... new Set(this.sveTransakcije.map((element:any)=>{return element.kategorija}))];
    console.log(this.vrsteTransakcija);

    this.ukupno= this.sveTransakcije.reduce((total:any, transakcija:any)=>{
      total = total+transakcija.iznos;
      return total;
    }, 0);//funkcija krece od 0

    console.log(this.ukupno);
    }
    );
  }
    FiltriraneTransakcije(kategorija:any)
    {
      this.filtriraneTransakcije = this.sveTransakcije.filter((transakcija:any)=>
      transakcija.kategorija===kategorija);
    }

   resetFilter()
   {
     this.filtriraneTransakcije = this.sveTransakcije;
   }

   NovaTransakcija()
   {
      this.router.navigate(['/novatransakcija']);
   }


}
