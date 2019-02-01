import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';
import { Gallery } from '../../model/gallery.model';
import * as firebase from "firebase";
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [GalleryService]
})
export class CreateComponent implements OnInit {
  gallerys: FirebaseListObservable<any[]>;


  constructor(private galleryService: GalleryService) {
    //     this.authService.user.subscribe(user => {
    //   if (user == null) {
    //     this.isLoggedIn = false;
    //   } else {
    //     this.isLoggedIn = true;
    //   }
    // });

  }

  ngOnInit() {
    this.gallerys = this.galleryService.getGallerys();
  }

  submitForm(
      name: string,
      creator: string,
      galleryDescription: string,
      fundGoal: number,
      fundDescription: string,
      reward: string)
      {
        var newGallery: Gallery = new Gallery(name, creator, galleryDescription, fundGoal, fundDescription, reward);
        this.galleryService.addGallery(newGallery);
      }
}
