import { Component } from '@angular/core';
import { RegisterUserService } from '../services/register-user.service';

@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css']
})
export class RegisterUserFormComponent {
  email = "";
  password = "";

  constructor(private registerUserService: RegisterUserService){}

  registerUser(){
    const user= {
      email: this.email,
      password: this.password 
    };
    this.registerUserService.register(user);

    this.email = this.password = "";
  }

}

export type User ={
  email: string;
  password: string;
};
