import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common'; // Added

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message'
  name = ''

  constructor(private route :ActivatedRoute){}

  ngOnInit(): void {
      console.log(this.message);
      this.name = this.route.snapshot.params['name']
  }

}
