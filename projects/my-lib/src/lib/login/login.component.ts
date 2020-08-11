import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service'

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
  
})
export class LoginComponent implements OnInit {

  public test;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, @Inject('config') private config) { }

  ngOnInit(): void {
    this.test = this.config
    console.log('test', this.test)
  }



  onSubmit() {
    //console.log(this.loginForm.value);
    this.loginService.setFormData(this.loginForm.value)
  }

}
