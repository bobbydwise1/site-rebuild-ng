import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { ProfileComponent } from './artist/profile/profile.component';
import { GalleryComponent } from './artist/gallery/gallery.component';
import { GalleryDetailComponent } from './artist/gallery-detail/gallery-detail.component';
import { CreateComponent } from './artist/create/create.component';
import { UpdateComponent } from './artist/update/update.component';
import { DeleteComponent } from './artist/delete/delete.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GalleryComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    GalleryDetailComponent,
    ArtistComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
