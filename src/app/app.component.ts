import { Component } from '@angular/core';
import { Picture } from './models/picture.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  childSelectedTask: any;


  currentFocus: string = 'Angular Homework';
  selectedTask = null;

  masterPictureList: Picture[] = [
    new Picture(1,"picture 1","filename1"),
    new Picture(2,"picture 1","filename1"),
    new Picture(3,"picture 1","filename1")
  ];


  addPicture(newPicture: Picture) {
    this.masterPictureList.push(newPicture);
  }

  editPicture(clickedPicture) {
     this.selectedPicture = clickedPicture;
   }

   finishedEditing() {
    this.selectedPicture = null;
  }
}
