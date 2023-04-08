import { Component } from '@angular/core';
import { CharacterInput } from './item-card/item-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly newProperty = {
    name: 'Saci',
    image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2023/03/aerkjn.jpg',
    actorName: 'Alessandra Negrine',
    description: 'Atriz brasileira,  que ganhou notoriedade por seus trabalhos na televisão, como na minissérie Engraçadinha e nas novelas Anjo Mau e Paraíso Tropical. No cinema foi aclamada nos filmes Cleópatra, 2 Coelhos e O Abismo Prateado.',
  };

 characters: Array<CharacterInput> = [
  {
    name: 'Cuca',
    image:'https://observatoriodocinema.uol.com.br/wp-content/uploads/2023/03/aerkjn.jpg',
    actorName: 'Alessandra Negrine',
    description:'Atriz brasileira,  que ganhou notoriedade por seus trabalhos na televisão, como na minissérie Engraçadinha e nas novelas Anjo Mau e Paraíso Tropical. No cinema foi aclamada nos filmes Cleópatra, 2 Coelhos e O Abismo Prateado.',

  }

  


 ]

 logInput(event: string){
  console.log (event);
 };
}