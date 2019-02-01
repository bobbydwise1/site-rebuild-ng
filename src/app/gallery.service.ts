import { Injectable } from '@angular/core';
import { Gallery } from './model/gallery.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GalleryService {
    gallerys: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.gallerys = database.list('gallerys');
  }

  getGallerys(){
    return this.gallerys;
  }

  addGallery(newGallery: Gallery) {
    this.gallerys.push(newGallery);
  }

  getGalleryById(galleryId: string){
    return this.database.object('/gallerys/' + galleryId);
  }

  updateGallery(localUpdatedGallery){
    var galleryEntryInFirebase = this.getGalleryById(localUpdatedGallery.$key);
    galleryEntryInFirebase.update({title: localUpdatedGallery.title,
                                artist: localUpdatedGallery.artist,
                                description: localUpdatedGallery.description});
  }

}
