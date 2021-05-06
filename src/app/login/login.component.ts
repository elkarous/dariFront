import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../shered/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:User;
  constructor( private userService:UserService) { }

  ngOnInit(): void {
    this.user=new User();
  }
login(){
    this.userService.login(this.user).subscribe();
}
}
