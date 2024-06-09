import { Component, OnInit } from '@angular/core';

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


  ngOnInit(): void {
   
  }

  handleLogin(){
    if(this.username ==="Lebo" && this.password==="Mo"){
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
      console.log(this.username)
      console.log(this.password)
    }
  
  }
  

}
