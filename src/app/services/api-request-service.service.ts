import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestServiceService {

  constructor(private http: HttpClient) { }

  getCharacter() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }


}
