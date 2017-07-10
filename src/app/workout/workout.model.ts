import { Exercise } from './exercise.model';

export class Workout{

   public workout:Exercise[];
    //public days: number;

    constructor(days: number, exercises: Exercise[]){
       // this.workout = [Exercise[days]];
       this.workout = exercises;

    }



}