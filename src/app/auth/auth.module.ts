import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,

  ]
})
export class AuthModule{

}
