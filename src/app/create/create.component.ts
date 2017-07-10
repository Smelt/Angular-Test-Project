import { Component, OnInit } from '@angular/core';
import { Exercise} from '../workout/exercise.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  exercises: Exercise[];



  constructor() { 
    this.exercises = [];
   
  }

  ngOnInit() {
  
  }

  addCard(){
    console.log("pushed ");
    let e = new Exercise("PlaceHolder", 0 , 0);
    this.exercises.push(e);


  }

 deleteCard(exercise: Exercise){
    this.exercises.splice(this.exercises.indexOf(exercise), 1);
   

  }

}
