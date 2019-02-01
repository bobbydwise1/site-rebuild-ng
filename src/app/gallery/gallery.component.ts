import { Component, OnInit } from '@angular/core';
import { Gallery } from '../model/gallery.model';
import { Router } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {
  gallerys: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private galleryService: GalleryService) { }

    ngOnInit(){
      this.gallerys = this.galleryService.getGallerys();

    }

    goToDetailPage(clickedGallery) {
      this.router.navigate(['gallerys', clickedGallery.$key]);
    };

}
