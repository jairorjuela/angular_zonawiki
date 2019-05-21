import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome : string;
  title = 'Tarea taller 2';
  tasks : {
      task: string,
      responsible : string
  }[];
  public show:boolean = false


  toggle(task) {
    task.show = !task.show;
  }

  constructor(){
      this.welcome = "Tarea del taller número 2"

      this.tasks = [{
          task : "Revisar agenda",
          responsible: "Pepito"
      },
      {
          task : "Trotar",
          responsible: "Fulando"
      },
      {
          task : "Comer",
          responsible: "Perensejo"
      }]
  };
}
