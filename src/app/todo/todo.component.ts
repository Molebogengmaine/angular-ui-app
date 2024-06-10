import { Component, OnInit } from '@angular/core';
//each typescript  file can have 1..* classess
export class Todo{
  constructor(//all of these params becomes a member of this class
    public id: number,
    public description :string,
    public complete:boolean,
    public date:Date
  ){

  }

}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent  implements OnInit{
    //structuring the code
  todos = [
    new Todo(1,'Integate this project with Springboot',false,new Date),
    new Todo(19,'Go to Cape town for the last time this year',false,new Date),
    new Todo(10,'Start International Trips',false,new Date),
    new Todo(12,'Buy another property',false,new Date),
    new Todo(15,'Become Dev Manager',false,new Date),
    
  ]
  // todo = {
  //   id:1,
  //   description : 'Learn Java Script'
  // }

  constructor(){}

  ngOnInit(): void {
   
  }

}
