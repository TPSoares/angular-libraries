import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.scss'],
  // providers: [ LoginService ]
})
export class MyLibComponent implements OnInit {


  
  constructor() { }

  ngOnInit(): void {
  }


  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  // onSubmit() {
  //   //console.log(this.loginForm.value);
  //   this.loginService.setFormData(this.loginForm.value)
  // }

}
