import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent implements OnInit {

  errorMessage = 'An error Occured! Contact support at 072200435'

  constructor(){}

  ngOnInit(): void {
      
  }

}
