import { NgModule, ModuleWithProviders } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyLibRoutingModule } from './my-lib.routes'

@NgModule({
  declarations: [
    MyLibComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MyLibRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MyLibComponent, LoginComponent]
})
export class MyLibModule { 
  static forRoot(config: any): ModuleWithProviders<MyLibModule> {
    // User config get logged here
    console.log(config);
    return {
      ngModule: MyLibModule,
      providers: [{provide: 'config', useValue: config}]
    };
  }
}
