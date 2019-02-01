import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../model/gallery.model';
import { Router } from '@angular/router';
import { GalleryService } from '../../gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
