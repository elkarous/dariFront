
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    encryptedPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private account: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value)
      .subscribe(
        res => this.handleResponse(res),
        err => this.toastr.error(
          `Erreur`,
          'verify your informations !',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        ))
  }

  handleResponse(data) {
    this.token.handle(data);
    this.account.changeAuthStatus(true);
    this.toastr.success(
      `Welcome : ${ this.token.getInfos().name }`,
      'You are connected !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    this.router.navigateByUrl('/dashboard');
  }

}
