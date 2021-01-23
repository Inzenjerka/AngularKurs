import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransakcijaModel } from './interfejsi/transakcija-model';
import { ZaposlenikModel } from './interfejsi/zaposlenik-model';

@Injectable({
  providedIn: 'root'
})
export class GlobalniService {

  zaposlenici = [
    {ime:'Sergej', starost: 45, radnoMjesto:'Frontend developer'},
    {ime:'Samir', starost: 35, radnoMjesto:'Backend developer'},
    {ime:'Nur', starost: 20, radnoMjesto:'Database developer'},
    {ime:'Vildana', starost: 25, radnoMjesto:'Database developer'},
    {ime:'Lejla', starost: 29, radnoMjesto:'Backend developer'},
    {ime:'Elma', starost: 23, radnoMjesto:'Backend developer'}
  ];

  constructor(private http: HttpClient) { }

  public getZaposlenici(){
    //return this.zaposlenici;
    return this.http.get('https://www.angular-kurs.online/api/zaposlenici');
  }

  public getTransakcije(){
    return this.http.get('https://www.angular-kurs.online/api/transakcije');
  }

  public getDrzave(){
    return this.http.get('https://www.angular-kurs.online/api/drzave');
  }

  public pretraziDrzave(terminZaPretragu: string){
    return this.http.get('https://www.angular-kurs.online/api/drzave/'+terminZaPretragu);
  }

  public pretraziZaposlene(terminZaPretragu: string){
    return this.http.get('https://www.angular-kurs.online/api/zaposleni/'+terminZaPretragu);
  }

  public postZaposlenik(noviZaposlenik: ZaposlenikModel)
  {
    return this.http.post<ZaposlenikModel>('https://www.angular-kurs.online/api/zaposlenici', noviZaposlenik);
  }

  public postTransakcija(novaTransakcija : TransakcijaModel)
  {
    return this.http.post<TransakcijaModel>('https://www.angular-kurs.online/api/transakcije', novaTransakcija);
  }
}
