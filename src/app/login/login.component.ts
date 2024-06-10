import { Component, OnInit } from '@angular/core';
//import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username = "Lebo"
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

//router is a dependency injection and 
//its a build in feature 
//router is the dependency of login Componet 
  constructor(private router : Router){}  //parameter in a constructor becomes avail as member variable

  ngOnInit(): void {
   
  }

  handleLogin(){
    if(this.username ==="Lebo" && this.password==='Mo'){
      //redirect to welcome page
    this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
      console.log(this.username)
      console.log(this.password)
    }
  
  }
  

}
