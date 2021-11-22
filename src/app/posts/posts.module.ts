import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { PostCreateComponent } from "./post-create/post-create.component";
import { PostListComponent } from "./post-list/post-list.component";

@NgModule({
  declarations:[
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    CommonModule, //this is added to be able to use *ngif, BrowserModule has to be in one module  i.e  - root module
    RouterModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class  PostsModule{

}
