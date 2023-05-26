import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUser():Users{
    return{
      id:"xxxx-xxxx-xxxx-xxxx",
      firstname:"chanapon",
      lastname:"chuenchuwit",
      university:{
        name:"kmitl",
        faculty:"it",
        major:"software engineer"
      },
      email:"chanapon.1312@gmail.com",
      phone:"0830727484"
    };
  }

  // constructor() { }
}
