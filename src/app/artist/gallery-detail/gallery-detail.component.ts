import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Gallery } from '../../model/gallery.model';
import { GalleryService } from '../../gallery.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css'],
  providers: [GalleryService]
})

export class GalleryDetailComponent implements OnInit {

  galleryId: string;
  galleryToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.galleryId = urlParameters['id']
    });
    this.galleryToDisplay = this.galleryService.getGalleryById(this.galleryId);
  }

}
