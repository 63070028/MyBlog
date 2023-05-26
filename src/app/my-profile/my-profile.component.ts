import { Component } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  user:Users = {
    id:"None",
    firstname:"None",
    lastname:"None",
    university:{
      name:"None",
      faculty:"None",
      major:"None"
    },
    email:"None",
    phone:"None",
  };

  constructor(private usersServices: UsersService){}

  getUser():void{
    this.user = this.usersServices.getUser();
  }

  ngOnInit(): void {
    this.getUser();
  }

}
