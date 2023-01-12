import { Component, OnInit } from '@angular/core';
import { randomCharacter } from 'src/app/interfaces/random-character-interface';
import { ApiRequestServiceService } from '../../services/api-request-service.service';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {

  characterRandoms: randomCharacter[] = [];
  changeMedia: boolean = false;

  constructor(
    private apiService: ApiRequestServiceService
  ){

  }

  ngOnInit(){
   this.getImages();
  }

  getImages(){
    this.apiService.getCharacter().subscribe((response: any) => {
      const resRandom = { ...response };
      console.log(resRandom.results);

      resRandom.results.forEach((element: any) => {
        let character: randomCharacter = {
          image: '',
          name: ''
        };
        if (element.image && element.name) {
          character.image = element.image;
          character.name = element.name;
          this.characterRandoms.push(character);
        }

      });
      console.log(this.characterRandoms);


    })
  }



}
