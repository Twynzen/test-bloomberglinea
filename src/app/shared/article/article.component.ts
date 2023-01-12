import { Component, Input } from '@angular/core';
import { randomCharacter } from 'src/app/interfaces/random-character-interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() currentCharacter: randomCharacter = {
    name: '',
    image: ''
  } as randomCharacter;

  @Input() article1: boolean = false;

  constructor(
  ){

  }

}
