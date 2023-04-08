
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponet {
  input = "";
  @Output()searchInputEvent: EventEmitter<string> = new EventEmitter<string>();

  inputChange(){
    this.searchInputEvent.emit(this.input);
  }

}
