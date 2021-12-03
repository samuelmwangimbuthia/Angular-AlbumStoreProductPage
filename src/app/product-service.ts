import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/operators';


@Injectable()
export class ProductService {
private _albumUrl = '../assets/album.json';

constructor(private _http: HttpClient) { }

  getAlbum(id:number){
    return this._http.get(this._albumUrl).
    map((response:any) => response.json());
  }
}
