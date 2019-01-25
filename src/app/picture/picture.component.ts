import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  key: string;
  name: string;
  url: string;
  file: File;

  constructor(file: File) {
    this.file = File;
  }
}
