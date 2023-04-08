import { Component, Input } from '@angular/core';


export interface CharacterInput{
  name: string;
  image: string;
  actorName: string,
  description: string;

}


@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})

export class ItemCardComponet{
  @Input() character: CharacterInput={
    name: "",
    image: "",
    actorName: "",
    description: "",
  };
}
