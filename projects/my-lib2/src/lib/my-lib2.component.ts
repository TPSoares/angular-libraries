import { Component, OnInit } from '@angular/core';
//import { LoginService } from 'projects/my-lib/src/lib/login/login.service'
 

@Component({
  selector: 'lib-my-lib2',
  templateUrl: './my-lib2.component.html',
  styleUrls: ['./my-lib2.component.scss'],
  // providers: [ LoginService ]
})
export class MyLib2Component implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(
    //private loginService: LoginService
    ) { }

  ngOnInit(): void {
  
    // this.loginService.getFormData()
    //   .subscribe(result => {
    //     this.email = result.email;
    //     this.password = result.password
    //   })
  
  }

}
