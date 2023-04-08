import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ModalComponent } from './modal/modal.component';
import { RegisterUserFormComponent } from './register-user-form/register-user-form.component';
import { ItemCardComponet } from './item-card/item-card.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponet } from './search-input/search-input.component';



@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      FormularioComponent,
      ModalComponent,
      ItemCardComponet,
      RegisterUserFormComponent,
      SearchInputComponet
    ],



  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
