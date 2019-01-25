import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { routing } from './app.routing';
import { AppComponent } from './app.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { AboutComponent } from './about/about.component';
// import { MarketplaceComponent } from './marketplace/marketplace.component';
// import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PictureComponent } from './picture/picture.component';

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
    SearchBarComponent,
    GalleryComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
