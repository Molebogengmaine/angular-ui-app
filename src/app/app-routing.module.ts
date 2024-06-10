import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { TodoComponent } from './todo/todo.component';
//this file is used to route between classes
const routes: Routes = [
//defining an object

{path:'', component:LoginComponent},//setting the default path to be login
{ path: 'login', component:LoginComponent},
{ path: 'welcome/:name' , component : WelcomeComponent},
{path: 'todo', component:TodoComponent},
{ path: '**', component:ErrorMessageComponent}//anything else route to this component

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
