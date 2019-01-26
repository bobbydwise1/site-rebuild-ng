import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../models/picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  @Input() childSelectedPicture: Picture;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
