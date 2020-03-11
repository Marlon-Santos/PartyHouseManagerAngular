import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SalesComponent } from "./sales/sales.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HeaderComponent, SalesComponent, LoginComponent],
  exports: [HeaderComponent, SalesComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
