import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyLibComponent } from 'my-lib';
import { MyLib2Component } from 'my-lib2';
import { LoginComponent } from '../../projects/my-lib/src/lib/login/login.component';
import { RegisterComponent } from '../../projects/my-lib/src/lib/register/register.component';


const routes: Routes = [
  { 
    path: '',
    //component: AppComponent,
    children: [
      { 
        path: 'login',
        loadChildren: () => import('projects/my-lib/src/lib/my-lib.module').then(m => m.MyLibModule)
      },
      { path: 'register', component: MyLib2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
