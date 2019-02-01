import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../model/gallery.model';
import { Router } from '@angular/router';
import { GalleryService } from '../../gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
